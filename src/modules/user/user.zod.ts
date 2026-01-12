import { z } from "zod";

export const UserCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  profile: z.url("Profile must be a valid URL"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type User = z.infer<typeof UserCreateSchema>;

export const UserUpdateSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  profile: z.url("Profile must be a valid URL").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
});

export type UserUpdate = z.infer<typeof UserUpdateSchema>;
