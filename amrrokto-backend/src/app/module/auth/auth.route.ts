import { Router } from "express";
import { AuthController } from "./auth.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { authLimiter } from "../../middlewares/rateLimiter";

const router = Router();
console.log("api from auth route")
router.post("/register", AuthController.registerUser);
router.post("/login", authLimiter, AuthController.loginUser);
router.post("/check-phone", AuthController.checkPhone);
router.post("/refresh", AuthController.refreshToken);
router.post("/logout", AuthController.logout);

router.get("/verify-email", AuthController.verifyEmail);
router.get("/me", checkAuth(), AuthController.getMe);

export const AuthRoutes = router;