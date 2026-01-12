import { GenreModel } from "./genre.model";
import { IGenre } from "./genre.types";

const addGenre = async (payload: IGenre) => {
  const genre = await GenreModel.create(payload);
  return genre;
};

const updateGenre = async (id: string, payload: Partial<IGenre>) => {
  const genre = await GenreModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return genre;
};

const deleteGenre = async (id: string) => {
  const genre = await GenreModel.findByIdAndDelete(id);
  return genre;
};

const getAllGenres = async () => {
  return await GenreModel.find();
};

const getGenreById = async (id: string) => {
  return await GenreModel.findById(id);
};

export const GenreService = {
  addGenre,
  updateGenre,
  deleteGenre,
  getAllGenres,
  getGenreById,
};
