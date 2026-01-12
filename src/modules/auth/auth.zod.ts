import { z } from "zod";

export const AuthLoginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string(),
});

export type AuthLogin = z.infer<typeof AuthLoginSchema>;
