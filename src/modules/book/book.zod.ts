import { z } from "zod";

export const BookCreateSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid genre ObjectId"),
  description: z.string().min(1, "Description is required"),
  coverImage: z.string().url("Cover image must be a valid URL"),
});

export const BookUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
  genre: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .optional(),
  description: z.string().min(1).optional(),
  coverImage: z.url().optional(),
});

export type BookCreate = z.infer<typeof BookCreateSchema>;
export type BookUpdate = z.infer<typeof BookUpdateSchema>;
