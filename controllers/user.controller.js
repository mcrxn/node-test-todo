import { UserService } from "../services/user.service.js";

export class UsersController {
  static async getActivitiesByUser(req, res, next) {
    try {
      const user = req.user;

      const activities = await UserService.getActivitiesByUser(user);

      res.status(200).send(activities);
    } catch (error) {
      next(error);
    }
  }
}
