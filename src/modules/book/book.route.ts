import { Router } from "express";
import { BookController } from "./book.controller";

export const BookRouter = Router();

BookRouter.post("/", BookController.addBook);
BookRouter.put("/:id", BookController.updateBook);
BookRouter.delete("/:id", BookController.deleteBook);
BookRouter.get("/", BookController.getAllBooks);
BookRouter.get("/:id", BookController.getBookById);
