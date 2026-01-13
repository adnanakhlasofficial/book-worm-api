import { Router } from "express";
import { zodValidate } from "../../middlewares/zodValidate.middleware";
import { UserCreateSchema, UserUpdateSchema } from "./user.zod";
import { UserController } from "./user.controller";
import { checkAuth } from "../../middlewares/checkAuth.middleware";
import { UserRole } from "./user.types";

export const UserRouter = Router();

UserRouter.post("/", zodValidate(UserCreateSchema), UserController.createUser);
UserRouter.put(
  "/:id",
  zodValidate(UserUpdateSchema),
  UserController.updateUser
);
UserRouter.delete("/:id", UserController.deleteUser);
UserRouter.patch("/:id/role", UserController.updateUserRole);
UserRouter.get(
  "/me",
  checkAuth(UserRole.ADMIN, UserRole.USER),
  UserController.getMe
);
