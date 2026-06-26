import dotenv from 'dotenv';
import AppError from '../errors/AppError';
import status from 'http-status';

dotenv.config();

interface EnvVars {
    PORT: string;
    DATABASE_URL: string;
    NODE_ENV: string;
    ADMIN_PASSWORD: string;
    ADMIN_EMAIL: string;
    FRONTEND_URL: string;
    EMAIL_SENDER: {
        SMTP_HOST: string;
        SMTP_PORT: string;
        SMTP_USER: string;
        SMTP_PASS: string;
        SMTP_FROM: string;
    };
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES_IN: string;
};

const loadEnv = (): EnvVars => {
    const requiredVars = [
        'PORT',
        'DATABASE_URL',
        'NODE_ENV',
        'ADMIN_PASSWORD',
        'ADMIN_EMAIL',
        'FRONTEND_URL',
        'EMAIL_SENDER_SMTP_HOST',
        'EMAIL_SENDER_SMTP_PORT',
        'EMAIL_SENDER_SMTP_USER',
        'EMAIL_SENDER_SMTP_PASS',
        'EMAIL_SENDER_SMTP_FROM',
        'JWT_SECRET',
        'JWT_EXPIRES_IN',
        'JWT_REFRESH_SECRET',
        'JWT_REFRESH_EXPIRES_IN',
    ];

    const missingVars: string[] = [];
    requiredVars.forEach((envVar) => {
        if (!process.env[envVar]) {
            missingVars.push(envVar)
        }
    });

    if (missingVars.length > 0) {
        throw new AppError(status.NOT_FOUND, `❌ Missing critical environment variables:, ${missingVars.join(', ')}`)
    }

    return {
        PORT: process.env.PORT!,
        DATABASE_URL: process.env.DATABASE_URL!,
        NODE_ENV: process.env.NODE_ENV!,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD!,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL!,
        FRONTEND_URL: process.env.FRONTEND_URL!,
        EMAIL_SENDER: {
            SMTP_HOST: process.env.EMAIL_SENDER_SMTP_HOST!,
            SMTP_PORT: process.env.EMAIL_SENDER_SMTP_PORT!,
            SMTP_USER: process.env.EMAIL_SENDER_SMTP_USER!,
            SMTP_PASS: process.env.EMAIL_SENDER_SMTP_PASS!,
            SMTP_FROM: process.env.EMAIL_SENDER_SMTP_FROM!,
        },
        JWT_SECRET: process.env.JWT_SECRET!,
        JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
        JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN!,
    };
};

export const env = loadEnv();