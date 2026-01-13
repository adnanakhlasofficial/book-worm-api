// models/genre.model.ts
import { Schema, model } from "mongoose";
import { GenreType, IGenre } from "./genre.types";

const GenreSchema = new Schema<IGenre>(
  {
    name: {
      type: String,
      enum: {
        values: Object.values(GenreType),
        message: "{VALUE} is not acceptable",
      },
      required: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const GenreModel = model<IGenre>("genre", GenreSchema);
