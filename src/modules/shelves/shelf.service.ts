import { UserModel } from "../user/user.model";
import { AddToShelfDTO, UpdateProgressDTO } from "./shelf.types";

const addToWantToRead = async (userId: string, { bookId }: AddToShelfDTO) => {
  return await UserModel.findByIdAndUpdate(
    userId,
    { $addToSet: { "shelves.wantToRead": bookId } },
    { new: true }
  ).populate("shelves.wantToRead shelves.read shelves.currentlyReading.book");
};

const addToCurrentlyReading = async (
  userId: string,
  { bookId }: AddToShelfDTO
) => {
  return await UserModel.findByIdAndUpdate(
    userId,
    {
      $addToSet: { "shelves.currentlyReading": { book: bookId, progress: 0 } },
    },
    { new: true }
  ).populate("shelves.wantToRead shelves.read shelves.currentlyReading.book");
};

const updateProgress = async ({
  userId,
  bookId,
  progress,
}: UpdateProgressDTO) => {
  return await UserModel.findOneAndUpdate(
    { _id: userId, "shelves.currentlyReading.book": bookId },
    { $set: { "shelves.currentlyReading.$.progress": progress } },
    { new: true }
  ).populate("shelves.wantToRead shelves.read shelves.currentlyReading.book");
};

const addToRead = async (userId: string, { bookId }: AddToShelfDTO) => {
  return await UserModel.findByIdAndUpdate(
    userId,
    { $addToSet: { "shelves.read": bookId } },
    { new: true }
  ).populate("shelves.wantToRead shelves.read shelves.currentlyReading.book");
};

const getShelves = async (userId: string) => {
  return await UserModel.findById(userId).populate(
    "shelves.wantToRead shelves.read shelves.currentlyReading.book"
  );
};

export const ShelfService = {
  addToWantToRead,
  addToCurrentlyReading,
  updateProgress,
  addToRead,
  getShelves,
};
