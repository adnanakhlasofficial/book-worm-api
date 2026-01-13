import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BookService } from "./book.service";

const addBook = catchAsync(async (req: Request, res: Response) => {
  const data = await BookService.addBook(req.body);
  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Book added successfully.",
    data,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await BookService.updateBook(id, req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Book updated successfully.",
    data,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await BookService.deleteBook(id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Book deleted successfully.",
    data,
  });
});

const getAllBooks = catchAsync(async (_req: Request, res: Response) => {
  const data = await BookService.getAllBooks();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Books retrieved successfully.",
    data,
  });
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await BookService.getBookById(id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Book retrieved successfully.",
    data,
  });
});

export const BookController = {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBookById,
};