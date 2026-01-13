import { BookModel } from "./book.model";
import { IBook } from "./book.types";

const addBook = async (payload: IBook) => {
  const book = await BookModel.create(payload);
  return book;
};

const updateBook = async (id: string, payload: Partial<IBook>) => {
  const book = await BookModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return book;
};

const deleteBook = async (id: string) => {
  const book = await BookModel.findByIdAndDelete(id);
  return book;
};

const getAllBooks = async () => {
  return await BookModel.find().populate("genre");
};

const getBookById = async (id: string) => {
  return await BookModel.findById(id).populate("genre");
};

export const BookService = {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBookById,
};
