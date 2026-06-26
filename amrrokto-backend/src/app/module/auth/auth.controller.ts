import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
import { AuthService } from "./auth.service";
import { loginSchema, registerSchema } from "./auth.validation";

const REFRESH_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

const checkPhone = () => catchAsync(async (req: Request, res: Response) => {
    const { phone } = req.query as { phone: string };
    const response = await AuthService.checkPhone(phone);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Phone is successfully",
        data: response
    })
});

const verifyEmail = () => catchAsync(async (req: Request, res: Response) => {
    const { token, id } = req.query as { token: string; id: string };
    const response = await AuthService.verifyEmail(token, id);
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Verify email successfully",
        data: response
    })
});

const refreshToken = () => catchAsync(async (req: Request, res: Response) => {
    const refreshToken = req.cookies?.refreshToken;
    const tokens = await AuthService.refreshAccessToken(refreshToken);
    res.cookie('refreshToken', tokens.refreshToken, REFRESH_COOKIE_OPTIONS);
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Refresh token recreated successfully",
        data: tokens
    });
});

const logout = () => catchAsync(async (req: Request, res: Response) => {
    res.clearCookie('refreshToken');
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Logout successfully",
        data: null
    });
})

const registerUser = () => catchAsync(async (req: Request, res: Response) => {
    const payload = registerSchema.parse(req.body)
    const response = await AuthService.registerUser(payload);
    sendResponse(res, {
        message: "User register successfully",
        statusCode: status.OK,
        data: response,
        success: true
    })
});

const loginUser = () => catchAsync(async (req: Request, res: Response) => {
    const payload = loginSchema.parse(req.body)
    const response = await AuthService.loginUser(payload);
    sendResponse(res, {
        message: "User login successfully",
        statusCode: status.OK,
        data: response,
        success: true
    })
});

const getMe = () => catchAsync(async (req: Request, res: Response) => {
    const response = await AuthService.getMe(req.user.userId);
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "User get successfully",
        data: response
    });
});

export const AuthController = {
    registerUser,
    loginUser,
    checkPhone,
    verifyEmail,
    refreshToken,
    logout,
    getMe
};