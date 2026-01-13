import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { ShelfService } from "./shelf.service";
import { sendResponse } from "../../utils/sendResponse";

const addToWantToRead = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.id;
  const data = await ShelfService.addToWantToRead(userId, req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Book added to Want To Read shelf.",
    data,
  });
});

const addToCurrentlyReading = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user.id;
    const data = await ShelfService.addToCurrentlyReading(userId, req.body);
    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: "Book added to Currently Reading shelf.",
      data,
    });
  }
);

const updateProgress = catchAsync(async (req: Request, res: Response) => {
  const data = await ShelfService.updateProgress(req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Reading progress updated.",
    data,
  });
});

const addToRead = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.id;
  const data = await ShelfService.addToRead(userId, req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Book added to Read shelf.",
    data,
  });
});

const getShelves = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.id;
  const data = await ShelfService.getShelves(userId);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Shelves retrieved successfully.",
    data,
  });
});

export const ShelfController = {
  addToWantToRead,
  addToCurrentlyReading,
  updateProgress,
  addToRead,
  getShelves,
};
