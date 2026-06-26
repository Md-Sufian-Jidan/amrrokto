import { Response, NextFunction } from 'express';
import { AuthRequest } from './authenticate';
import AppError from '../errors/AppError';
import status from 'http-status';

export const checkAuth = (...roles: string[]) => {
    return (req: AuthRequest, _res: Response, next: NextFunction) => {
        if (!req.user) {
            return next(new AppError(status.UNAUTHORIZED, 'Authentication required'));
        }
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError(
                    status.UNAUTHORIZED,
                    `Access denied. Required role: ${roles.join(' or ')}`,
                )
            );
        }
        next();
    };
};