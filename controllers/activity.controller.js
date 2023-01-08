import { ActivityService } from "../services/activity.service.js";

export class ActivityController {
  static async createActivity(req, res, next) {
    try {
      const user = req.user;

      const activityData = req.body;

      const createdActivity = await ActivityService.createActivity(
        user,
        activityData
      );

      res.status(201).send(createdActivity);
    } catch (error) {
      next(error);
    }
  }
  static async getActivityById(req, res, next) {
    try {
      const activityId = req.params.id;

      const activity = await ActivityService.getActivityById(activityId);

      res.status(200).send(activity);
    } catch (error) {
      next(error);
    }
  }

  static async updateActivity(req, res, next) {
    try {
      const activityId = req.params.id;
      const updateData = req.body;

      await ActivityService.updateActivity(activityId, updateData);

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }

  static async deleteActivity(req, res, next) {
    try {
      const user = req.user;

      const activityId = req.params.id;

      await ActivityService.deleteActivity(user, activityId);

      console.log(user);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}
