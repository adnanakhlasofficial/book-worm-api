import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { GenreService } from "./genre.service";
import { sendResponse } from "../../utils/sendResponse";

const addGenre = catchAsync(async (req: Request, res: Response) => {
  const data = await GenreService.addGenre(req.body);
  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "Genre added successfully.",
    data,
  });
});

const updateGenre = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await GenreService.updateGenre(id, req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Genre updated successfully.",
    data,
  });
});

const deleteGenre = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await GenreService.deleteGenre(id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Genre deleted successfully.",
    data,
  });
});

const getAllGenres = catchAsync(async (_req: Request, res: Response) => {
  const data = await GenreService.getAllGenres();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Genres retrieved successfully.",
    data,
  });
});

const getGenreById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await GenreService.getGenreById(id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Genre retrieved successfully.",
    data,
  });
});

export const GenreController = {
  addGenre,
  updateGenre,
  deleteGenre,
  getAllGenres,
  getGenreById,
};
