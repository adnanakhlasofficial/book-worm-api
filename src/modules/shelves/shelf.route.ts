import { Router } from "express";
import { ShelfController } from "./shelf.controller";
import { checkAuth } from "../../middlewares/checkAuth.middleware";
import { UserRole } from "../user/user.types";

export const ShelfRouter = Router();

ShelfRouter.post(
  "/want-to-read",
  checkAuth(UserRole.ADMIN, UserRole.USER),
  ShelfController.addToWantToRead
);
ShelfRouter.post(
  "/currently-reading",
  checkAuth(UserRole.ADMIN, UserRole.USER),
  ShelfController.addToCurrentlyReading
);
ShelfRouter.put(
  "/progress",
  checkAuth(UserRole.ADMIN, UserRole.USER),
  ShelfController.updateProgress
);
ShelfRouter.post(
  "/read",
  checkAuth(UserRole.ADMIN, UserRole.USER),
  ShelfController.addToRead
);
ShelfRouter.get(
  "/me",
  checkAuth(UserRole.ADMIN, UserRole.USER),
  ShelfController.getShelves
);
