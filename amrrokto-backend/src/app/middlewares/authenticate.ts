import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { prisma } from '../lib/prisma';
import AppError from '../errors/AppError';
import status from 'http-status';
import { Role } from '../../generated/prisma/enums';

export interface AuthRequest extends Request {
    user?: {
        userId: string;
        role: Role;
        email: string;
    };
}

export const authenticate = async (
    req: AuthRequest,
    _res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new AppError(status.UNAUTHORIZED, 'No token provided');
        }

        const token = authHeader.split(' ')[1];
        const payload = jwt.verify(token, env.JWT_SECRET) as {
            id: string;
            role: string;
            email: string;
        };

        const user = await prisma.user.findUnique({
            where: { id: payload.id },
            select: { id: true, role: true, email: true, isActive: true },
        });

        if (!user || !user.isActive) {
            throw new AppError(status.UNAUTHORIZED, 'Account not found or deactivated');
        }

        req.user = { userId: user.id, role: user.role, email: user.email };
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            next(new AppError(status.UNAUTHORIZED, 'Invalid or expired token'));
        } else {
            next(error);
        }
    }
};

// Like authenticate but does NOT block the request if no token is present.
// Silently sets req.user if a valid token is found.
export const optionalAuthenticate = async (
    req: AuthRequest,
    _res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next(); // No token — continue as guest
        }
        const token = authHeader.split(' ')[1];
        const payload = jwt.verify(token, env.JWT_SECRET) as { id: string; role: string; email: string };
        const user = await prisma.user.findUnique({
            where: { id: payload.id },
            select: { id: true, role: true, email: true, isActive: true },
        });
        if (user && user.isActive) {
            req.user = { userId: user.id, role: user.role, email: user.email };
        }
        next();
    } catch {
        next(); // Invalid token — continue as guest
    }
};