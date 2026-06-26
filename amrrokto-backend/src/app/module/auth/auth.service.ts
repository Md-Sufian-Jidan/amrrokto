import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import type { RegisterInput, LoginInput } from './auth.validation';
import { env } from '../../config/env';
import AppError from '../../errors/AppError';
import status from 'http-status';
import { prisma } from '../../lib/prisma';

type UserWithProfiles = {
  role: string;
  donorProfile?: {
    name: string;
    profileImage?: string | null;
    bloodGroup?: string | null;
    district?: string | null;
  } | null;
  seekerProfile?: { name: string; district?: string | null } | null;
  organizationProfile?: { organizationName: string; district?: string | null } | null;
};

export const generateTokens = (userId: string, role: string, email: string) => {
  const accessToken = jwt.sign({ id: userId, role, email }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  } as jwt.SignOptions);

  const refreshToken = jwt.sign({ id: userId }, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN,
  } as jwt.SignOptions);

  return { accessToken, refreshToken };
};

export const normalizePhone = (phone: string): string => {
    const clean = phone.replace(/\D/g, '');
    return clean.startsWith('88') ? `+${clean}` : `+88${clean}`;
};

const checkPhone = async (phone: string) => {
    if (!phone) throw new AppError(status.NOT_FOUND, 'Phone number is required');

    const normalizedPhone = normalizePhone(phone);

    const existing = await prisma.user.findUnique({
        where: { phone: normalizedPhone },
        select: {
            email: true,
            role: true,
            donorProfile: {
                select: { name: true, bloodGroup: true, division: true, district: true, thana: true },
            },
            seekerProfile: {
                select: { name: true, district: true },
            },
            organizationProfile: {
                select: { organizationName: true, type: true, district: true },
            },
        },
    });

    if (!existing) return { status: 'available' };

    // Legacy seeded-user merge path
    if (existing.email.endsWith('@roktolagbe.com')) {
        let profileData: Record<string, unknown> = {};

        if (existing.role === 'DONOR' && existing.donorProfile) {
            const { name, bloodGroup, division, district, thana } = existing.donorProfile;
            profileData = { name, bloodGroup, division, district, thana };
        } else if (existing.role === 'BLOOD_SEEKER' && existing.seekerProfile) {
            const { name, district } = existing.seekerProfile;
            profileData = { name, district };
        } else if (existing.role === 'ORGANIZATION' && existing.organizationProfile) {
            const { organizationName, type, district } = existing.organizationProfile;
            profileData = { name: organizationName, type, district };
        }

        return {
            status: 'mergeable',
            message: 'Hero detected! Join now to merge your legacy records.',
            data: profileData,
        };
    }

    return { status: 'taken', message: 'Phone number already registered' };
};

const getProfileSummary = (user: UserWithProfiles) => {
  switch (user.role) {
    case 'DONOR':
      return {
        name: user.donorProfile?.name ?? null,
        image: user.donorProfile?.profileImage ?? null,
        bloodGroup: user.donorProfile?.bloodGroup ?? null,
        district: user.donorProfile?.district ?? null,
      };
    case 'BLOOD_SEEKER':
      return {
        name: user.seekerProfile?.name ?? null,
        image: null,
        bloodGroup: null,
        district: user.seekerProfile?.district ?? null,
      };
    case 'ORGANIZATION':
      return {
        name: user.organizationProfile?.organizationName ?? null,
        image: null,
        bloodGroup: null,
        district: user.organizationProfile?.district ?? null,
      };
    default:
      return { name: null, image: null, bloodGroup: null, district: null };
  }
};

const registerUser = async (payload: RegisterInput) => {
  const existingEmail = await prisma.user.findUnique({ where: { email: payload.email } });
  if (existingEmail) throw new AppError(status.CONFLICT, 'Email already registered');

  const normalizedPhone = normalizePhone(payload.phone);
  const hashedPassword = await bcrypt.hash(payload.password, 12);

  const existingPhone = await prisma.user.findUnique({
    where: { phone: normalizedPhone },
    select: { id: true, email: true },
  });

  let userId: string;

  if (existingPhone) {
    // Only allow claiming a seeded (dummy-email) account
    if (!existingPhone.email.endsWith('@roktolagbe.com')) {
      throw new AppError(status.CONFLICT, 'Phone number already registered to another account');
    }

    const updated = await prisma.user.update({
      where: { id: existingPhone.id },
      data: {
        email: payload.email,
        password: hashedPassword,
        role: payload.role as any,
        isVerified: false,
        ...buildProfileUpsert(payload, 'upsert'),
      },
    });
    userId = updated.id;
  } else {
    const created = await prisma.user.create({
      data: {
        email: payload.email,
        phone: normalizedPhone,
        password: hashedPassword,
        role: payload.role as any,
        isVerified: false,
        ...buildProfileUpsert(payload, 'create'),
      },
    });
    userId = created.id;
  }

  // Send verification email (token is not persisted — link carries userId for lookup)
  const verifyToken = crypto.randomBytes(32).toString('hex');
  const verifyLink = `${env.FRONTEND_URL}/verify-email?token=${verifyToken}&id=${userId}`;

  let emailSent = true;
  try {
    // await sendEmail({
    //   to: payload.email,
    //   subject: '✅ Verify your RoktoLagbe account',
    //   html: `
    //     <h2>Welcome to AmrRokto! 🩸</h2>
    //     <p>Please verify your email address to activate your account.</p>
    //     <a href="${verifyLink}"
    //        style="background:#e53e3e;color:white;padding:10px 20px;border-radius:5px;text-decoration:none;">
    //       Verify Email
    //     </a>
    //     <p>Link expires in 24 hours.</p>
    //   `,
    // });
  } catch (error) {
    console.error('Failed to send verification email:', error);
    emailSent = false;
  }

  return {
    message: emailSent
      ? 'Registration successful. Please check your email to verify your account.'
      : 'Registration successful. (Verification email could not be sent — you can log in directly in development mode.)',
  };
};

const verifyEmail = async (token: string, userId: string) => {
  if (!token || !userId) throw new AppError(status.NOT_FOUND, 'Invalid verification link');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError(status.NOT_FOUND, 'User not found');

  if (user.isVerified) return { message: 'Email already verified. You can log in.' };

  const hoursSinceCreation = (Date.now() - user.createdAt.getTime()) / (1000 * 60 * 60);
  if (hoursSinceCreation > 24) {
    throw new AppError(
      status.NOT_FOUND,
      'Verification link has expired. Please register again or request a new link.',
    );
  }

  await prisma.user.update({ where: { id: userId }, data: { isVerified: true } });

  return { message: 'Email verified successfully! You can now access your hero dashboard.' };
};

const loginUser = async (payload: LoginInput) => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
    include: {
      donorProfile: true,
      seekerProfile: true,
      organizationProfile: true,
    },
  });

  if (!user) throw new AppError(status.UNAUTHORIZED, 'Invalid email or password');
  if (!user.isActive) throw new AppError(status.FORBIDDEN, 'Account has been deactivated');

  // In production, enforce email verification
  if (!user.isVerified && env.NODE_ENV === 'production') {
    throw new AppError(status.FORBIDDEN, 'Please verify your email first');
  }

  // 'password' field stores the bcrypt hash
  const isMatch = await bcrypt.compare(payload.password, user.password);
  if (!isMatch) throw new AppError(status.UNAUTHORIZED, 'Invalid email or password');

  const { accessToken, refreshToken } = generateTokens(user.id, user.role, user.email);
  const profileSummary = getProfileSummary(user);

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      ...profileSummary,
    },
  };
};

const refreshAccessToken = async (refreshToken: string) => {
  if (!refreshToken) throw new AppError(status.NOT_FOUND, 'No refresh token');

  try {
    const payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as { id: string };

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, role: true, email: true, isActive: true },
    });

    if (!user || !user.isActive) throw new AppError(status.NOT_FOUND, 'User not found or inactive');

    return generateTokens(user.id, user.role, user.email);
  } catch {
    throw new AppError(status.NOT_FOUND, 'Invalid or expired refresh token');
  }
};

const getMe = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      phone: true,
      role: true,
      isVerified: true,
      createdAt: true,
      donorProfile: true,
      seekerProfile: true,
      organizationProfile: true,
    },
  });

  if (!user) throw new AppError(status.NOT_FOUND, 'User not found');

  const profileSummary = getProfileSummary(user);

  return {
    id: user.id,
    email: user.email,
    phone: user.phone,
    role: user.role,
    isVerified: user.isVerified,
    createdAt: user.createdAt,
    // Normalised top-level fields (convenient for UI)
    ...profileSummary,
    // Full profile object for the active role only
    profile:
      user.role === 'DONOR'
        ? user.donorProfile
        : user.role === 'BLOOD_SEEKER'
          ? user.seekerProfile
          : user.role === 'ORGANIZATION'
            ? user.organizationProfile
            : null,
  };
};

function buildProfileUpsert(payload: RegisterInput, mode: 'create' | 'upsert') {
  if (payload.role === 'DONOR') {
    const data = {
      name: payload.name!,
      bloodGroup: payload.bloodGroup! as any,
      division: payload.division,
      district: payload.district!,
      thana: payload.thana,
    };
    return mode === 'create'
      ? { donorProfile: { create: data } }
      : { donorProfile: { upsert: { create: data, update: data } } };
  }

  if (payload.role === 'BLOOD_SEEKER') {
    const data = {
      name: payload.name!,
      division: payload.division,
      district: payload.district,
      thana: payload.thana,
    };
    return mode === 'create'
      ? { seekerProfile: { create: data } }
      : { seekerProfile: { upsert: { create: data, update: data } } };
  }

  if (payload.role === 'ORGANIZATION') {
    const data = {
      organizationName: payload.organizationName!,
      type: payload.organizationType! as any,
      district: payload.district!,
      contactPhone: payload.contactPhone!,
    };
    return mode === 'create'
      ? { organizationProfile: { create: data } }
      : { organizationProfile: { upsert: { create: data, update: data } } };
  }

  return {};
};

export const AuthService = {
  checkPhone,
  getProfileSummary,
  registerUser,
  verifyEmail,
  loginUser,
  refreshAccessToken,
  getMe
}