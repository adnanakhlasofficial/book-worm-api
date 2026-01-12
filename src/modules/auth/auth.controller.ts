import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";
import httpStatus from "http-status-codes";
import { removeCookie, setCookie } from "../../utils/cookies";
import { cookies } from "../../constraints/cookies";

const login = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const { userPayload, accessToken } = await AuthService.login(payload);

  setCookie(res, cookies.accessToken, accessToken);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Login successful.",
    data: userPayload,
  });
});

const logout = catchAsync(async (req: Request, res: Response) => {
  removeCookie(res, cookies.accessToken);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Logout successful.",
  });
});

export const AuthController = { login, logout, };
