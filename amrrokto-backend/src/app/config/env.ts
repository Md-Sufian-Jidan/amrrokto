import dotenv from 'dotenv';

dotenv.config();

interface EnvVars {
    port: string;
    databaseUrl: string;
    nodeEnv: string;
    adminPassword: string;
    adminEmail: string;
    frontendUrl: string;
    emailSender: {
        smtpHost: string;
        smtpPort: string;
        smtpUser: string;
        smtpPass: string;
        smtpFrom: string
    };
};

const loadEnv = (): EnvVars => {
    const requiredVars = [
        'port',
        'databaseUrl',
        'nodeEnv',
        'adminEmail',
        'adminPassword',
        'frontendUrl',
        'smtpHost',
        'smtpPort',
        'smtpUser',
        'smtpPass',
        'smtpFrom'
    ];

    const missingVars: string[] = [];
    requiredVars.forEach((envVar) => {
        if (!process.env[envVar]) {
            missingVars.push(envVar)
        }
    });

    if (missingVars.length > 0) {
        console.error('❌ Missing critical environment variables:', missingVars.join(', '));
    }

    return {
        port: process.env.PORT!,
        databaseUrl: process.env.DATABASE_URL!,
        nodeEnv: process.env.NODE_ENV!,
        adminEmail: process.env.ADMIN_EMIAL!,
        adminPassword: process.env.ADMIN_PASSWORD!,
        frontendUrl: process.env.FRONTEND_URL!,
        emailSender: {
            smtpHost: process.env.SMTP_HOST!,
            smtpFrom: process.env.SMTP_FORM!,
            smtpPass: process.env.SMTP_PASS!,
            smtpPort: process.env.SMTP_PORT!,
            smtpUser: process.env.SMTP_USER!
        }
    }
};

export const env = loadEnv();