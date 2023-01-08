import mongoose from "mongoose";
import { validateActivity } from "../validators/activity.validator.js";

const { Schema } = mongoose;

const activitySchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  fromDate: {
    type: Date,
  },
  toDate: {
    type: Date,
  },
});

export const Activity = mongoose.model("Activity", activitySchema);
