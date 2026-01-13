import { Router } from "express";
import { GenreController } from "./genre.controller";
import { zodValidate } from "../../middlewares/zodValidate.middleware";
import { GenreSchema } from "./genre.zod";
import { checkAuth } from "../../middlewares/checkAuth.middleware";
import { UserRole } from "../user/user.types";

export const GenreRouter = Router();

GenreRouter.post(
  "/",
  checkAuth(UserRole.ADMIN),
  zodValidate(GenreSchema),
  GenreController.addGenre
);
GenreRouter.put(
  "/:id",
  checkAuth(UserRole.ADMIN),
  zodValidate(GenreSchema),
  GenreController.updateGenre
);
GenreRouter.delete(
  "/:id",
  checkAuth(UserRole.ADMIN),
  GenreController.deleteGenre
);
GenreRouter.get("/", GenreController.getAllGenres);
GenreRouter.get("/:id", GenreController.getGenreById);
