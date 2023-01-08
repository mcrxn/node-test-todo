export class UserService {
  static async getActivitiesByUser(user) {
    try {
      const activities = (await user.populate("activities")).activities;

      return activities;
    } catch (error) {
      throw error;
    }
  }
}
