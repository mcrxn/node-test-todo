import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (message) => "invalid email",
    },
    unique: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  refreshTokens: [
    {
      type: String,
    },
  ],
});

userSchema.methods.comparePasswords = async function (loginPassword) {
  const isPasswordValid = await bcrypt.compare(loginPassword, this.password);

  return isPasswordValid;
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hashedPassword = await bcrypt.hash(this.password, 8);

    this.password = hashedPassword;

    return next();
  }
  return next();
});

userSchema.post("save", (error, _doc, next) => {
  if (error.code === 11000) {
    return next({ message: "Email Already Exists" });
  }

  return next();
});

export const User = mongoose.model("User", userSchema);
