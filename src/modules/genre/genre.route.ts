import { Router } from "express";
import { GenreController } from "./genre.controller";
import { zodValidate } from "../../middlewares/zodValidate.middleware";
import { GenreSchema } from "./genre.zod";

export const GenreRouter = Router();

GenreRouter.post("/", zodValidate(GenreSchema), GenreController.addGenre);
GenreRouter.put("/:id", zodValidate(GenreSchema),  GenreController.updateGenre);
GenreRouter.delete("/:id", GenreController.deleteGenre);
GenreRouter.get("/", GenreController.getAllGenres);
GenreRouter.get("/:id", GenreController.getGenreById);
