import { Router } from "express";
import { AuthController } from "./auth.controller";
import { zodValidate } from "../../middlewares/zodValidate.middleware";
import { AuthLoginSchema } from "./auth.zod";

export const AuthRouter = Router();

AuthRouter.post("/login", zodValidate(AuthLoginSchema), AuthController.login);
AuthRouter.post("/logout", AuthController.logout);