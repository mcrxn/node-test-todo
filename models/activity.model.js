import mongoose from "mongoose";

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
