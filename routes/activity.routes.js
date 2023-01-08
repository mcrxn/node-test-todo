import { Router } from "express";
import { ActivityController } from "../controllers/activity.controller.js";
import { validateActivity } from "../validators/activity.validator.js";
import { validateMiddleware } from "../middlewares/validate.middleware.js";

export const activitiesRouter = Router();

activitiesRouter.post(
  "/",
  [validateMiddleware(validateActivity)],
  ActivityController.createActivity
);
activitiesRouter.get("/:id", ActivityController.getActivityById);
activitiesRouter.patch(
  "/:id",
  [validateMiddleware(validateActivity)],
  ActivityController.updateActivity
);
activitiesRouter.delete("/:id", ActivityController.deleteActivity);
