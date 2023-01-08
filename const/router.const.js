import { Router } from "express";
import { activitiesRouter } from "../routes/activity.routes.js";
import { authRouter } from "../routes/auth.routes.js";
import { authValidator } from "../middlewares/auth.middleware.js";
import { usersRouter } from "../routes/user.routes.js";

export const globalRouter = Router();

globalRouter.use("/activities", authValidator, activitiesRouter);
globalRouter.use("/user", authValidator, usersRouter);
globalRouter.use("/auth", authRouter);
