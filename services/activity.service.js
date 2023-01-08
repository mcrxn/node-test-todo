import { Activity } from "../models/activity.model.js";

export class ActivityService {
  static async createActivity(user, activityData) {
    try {
      const { description, fromDate, toDate, status } = activityData;

      const activity = new Activity({ description, fromDate, toDate, status });

      const createdActivity = await activity.save();

      user.activities.push(createdActivity._id);

      user.save();

      return createdActivity;
    } catch (error) {
      throw error;
    }
  }
  static async getActivityById(activityId) {
    try {
      const activity = await Activity.findById(activityId);

      if (!activity) throw "Activity Not found";

      return activity;
    } catch (error) {
      throw error;
    }
  }

  static async updateActivity(activityId, updateData) {
    try {
      const allowedUpdates = ["description", "status", "fromDate", "toDate"];

      const activity = await Activity.findOne({ _id: activityId });

      if (!activity) throw "Activity Not found";

      const updateKeys = Object.keys(updateData);

      updateKeys.forEach((key) => {
        if (allowedUpdates.includes(key)) {
          activity[key] = updateData[key];
        }
      });

      await activity.save();
    } catch (error) {
      throw error;
    }
  }

  static async deleteActivity(user, activityId) {
    try {
      const isUserOwner = user.activities.includes(activityId);

      if (isUserOwner) {
        await Activity.findOneAndDelete({
          _id: activityId,
        });
      } else {
        throw "something";
      }

      // const deletedActivity =

      // console.log( typeof deletedActivity.valueOf() + " " + typeof activityId);
      // user.activities = user.activities.filter(activityId => deletedActivity !== activityId);
      // console.log(user.activities);
      // user.save();

      // if (!deletedActivity) throw "Activity Not found";
    } catch (error) {
      throw error;
    }
  }
}
