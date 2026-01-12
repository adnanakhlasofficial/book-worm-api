import { model, Schema } from "mongoose";
import { IUser, UserRole } from "./user.types";

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    profile: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: UserRole.USER,
      enum: {
        values: Object.values(UserRole),
        message: "{VALUE} is not acceptable",
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const UserModel = model("user", UserSchema);
