import { z } from "zod";
import { GenreType } from "./genre.types";

export const GenreSchema = z.object({
  name: z.enum(GenreType),
});

export type Genre = z.infer<typeof GenreSchema>;
