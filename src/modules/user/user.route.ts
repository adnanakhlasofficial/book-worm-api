import { Router } from "express";
import { zodValidate } from "../../middlewares/zodValidate.middleware";
import { UserCreateSchema, UserUpdateSchema } from "./user.zod";
import { UserController } from "./user.controller";

export const UserRouter = Router();

UserRouter.post("/", zodValidate(UserCreateSchema), UserController.createUser);
UserRouter.put("/:id", zodValidate(UserUpdateSchema), UserController.updateUser);
UserRouter.delete("/:id", UserController.deleteUser);
UserRouter.patch("/:id/role", UserController.updateUserRole);