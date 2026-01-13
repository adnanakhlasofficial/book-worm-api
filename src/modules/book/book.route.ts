import { Router } from "express";
import { BookController } from "./book.controller";
import { checkAuth } from "../../middlewares/checkAuth.middleware";
import { UserRole } from "../user/user.types";
import { zodValidate } from "../../middlewares/zodValidate.middleware";
import { BookCreateSchema, BookUpdateSchema } from "./book.zod";

export const BookRouter = Router();

BookRouter.post(
  "/",
  checkAuth(UserRole.ADMIN),
  zodValidate(BookCreateSchema),
  BookController.addBook
);
BookRouter.put(
  "/:id",
  checkAuth(UserRole.ADMIN),
  zodValidate(BookUpdateSchema),
  BookController.updateBook
);
BookRouter.delete("/:id", checkAuth(UserRole.ADMIN), BookController.deleteBook);
BookRouter.get("/", BookController.getAllBooks);
BookRouter.get("/:id", BookController.getBookById);
