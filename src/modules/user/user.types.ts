import { Types } from "mongoose";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profile: string;
  password: string;
  shelves: {
    wantToRead: Types.ObjectId[];
    currentlyReading: { book: Types.ObjectId; progress: number }[];
    read: Types.ObjectId[];
  };
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}
