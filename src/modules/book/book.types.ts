import { Types } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  genre: Types.ObjectId;
  description: string;
  coverImage: string;
  createdAt?: Date;
  updatedAt?: Date;
}
