import { Types } from "mongoose";

export interface ICurrentlyReading {
  book: Types.ObjectId;
  progress: number;
}

export interface IShelves {
  wantToRead: Types.ObjectId[];
  currentlyReading: ICurrentlyReading[];
  read: Types.ObjectId[];
}

export interface AddToShelfDTO {
  bookId: string;
}

export interface UpdateProgressDTO {
  userId: string;
  bookId: string;
  progress: number;
}
