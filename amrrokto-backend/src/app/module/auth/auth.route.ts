import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.post("/check-phone", AuthController.checkPhone);
router.post("/refresh", AuthController.refreshToken);
router.post("/logout", AuthController.logout);

router.get("/verify-email", AuthController.verifyEmail);
router.get("/me", AuthController.getMe);

export const AuthRoutes = router;