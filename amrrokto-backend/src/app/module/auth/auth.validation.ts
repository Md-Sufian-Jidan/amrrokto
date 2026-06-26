import { z } from 'zod';
import { bloodGroups, organizationTypes } from '../../utils/helpers';

export const registerSchema = z
    .object({
        email: z.string().email(),
        phone: z.string().min(1, 'Phone number is required'),
        password: z.string().min(8, 'Password must be at least 8 characters'),
        role: z.enum(['DONOR', 'BLOOD_SEEKER', 'ORGANIZATION']),
        division: z.string().optional(),
        district: z.string().optional(),
        thana: z.string().optional(),
        name: z.string().min(1).optional(),
        bloodGroup: z.enum(bloodGroups).optional(),
        organizationName: z.string().optional(),
        organizationType: z.enum(organizationTypes).optional(),
        contactPhone: z.string().optional(),
    })
    .superRefine((data, ctx) => {
        if (data.role === 'DONOR') {
            if (!data.name)
                ctx.addIssue({ code: 'custom', message: 'Name is required for donors', path: ['name'] });
            if (!data.bloodGroup)
                ctx.addIssue({ code: 'custom', message: 'Blood group is required', path: ['bloodGroup'] });
            if (!data.district)
                ctx.addIssue({ code: 'custom', message: 'District is required', path: ['district'] });
        }

        if (data.role === 'BLOOD_SEEKER') {
            if (!data.name)
                ctx.addIssue({ code: 'custom', message: 'Name is required', path: ['name'] });
        }

        if (data.role === 'ORGANIZATION') {
            if (!data.organizationName)
                ctx.addIssue({ code: 'custom', message: 'Organization name is required', path: ['organizationName'] });
            if (!data.organizationType)
                ctx.addIssue({ code: 'custom', message: 'Organization type is required', path: ['organizationType'] });
            if (!data.district)
                ctx.addIssue({ code: 'custom', message: 'District is required', path: ['district'] });
            if (!data.contactPhone)
                ctx.addIssue({ code: 'custom', message: 'Contact phone is required', path: ['contactPhone'] });
        }
    });

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

export type RegisterPayload = z.infer<typeof registerSchema>;
export type LoginPayload = z.infer<typeof loginSchema>;