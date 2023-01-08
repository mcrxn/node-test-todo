import { Router } from "express";
import { UsersController } from "../controllers/user.controller.js";

export const usersRouter = Router();

usersRouter.get("/activities", UsersController.getActivitiesByUser);
