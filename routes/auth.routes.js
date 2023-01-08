import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authValidator } from "../middlewares/auth.middleware.js";

export const authRouter = Router();

authRouter.post("/register", AuthController.registerUser);
authRouter.post("/login", AuthController.loginUser);
