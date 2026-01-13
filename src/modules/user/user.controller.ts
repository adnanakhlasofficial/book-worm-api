import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserService } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const data = await UserService.createUser(payload);
  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: "User registered sucessfully.",
    data,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const data = await UserService.updateUser(id, payload);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User updated successfully.",
    data,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await UserService.deleteUser(id);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User deleted successfully.",
    data,
  });
});

const updateUserRole = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { role } = req.body;

  const data = await UserService.updateUserRole(id, role);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User role updated successfully.",
    data,
  });
});

const getMe = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.id;
  const data = await UserService.getMe(userId);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User profile retrieved successfully.",
    data,
  });
});

export const UserController = {
  createUser,
  updateUser,
  deleteUser,
  updateUserRole,
  getMe,
};
