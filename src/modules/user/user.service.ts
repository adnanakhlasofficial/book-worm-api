import { create } from "domain";
import { env } from "../../configs/env";
import { UserModel } from "./user.model";
import { IUser } from "./user.types";
import bcrypt from "bcryptjs";

const createUser = async (payload: IUser) => {
  const passwordHash = await bcrypt.hash(
    payload.password,
    Number(env.BCRYPT_SALT_ROUND)
  );
  payload.password = passwordHash;
  const data = await UserModel.create(payload);
  return data;
};

const updateUser = async (id: string, payload: Partial<IUser>) => {
  if (payload.password) {
    const passwordHash = await bcrypt.hash(
      payload.password,
      Number(env.BCRYPT_SALT_ROUND)
    );
    payload.password = passwordHash;
  }

  const data = await UserModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return data;
};

const deleteUser = async (id: string) => {
  const data = await UserModel.findByIdAndDelete(id);
  return data;
};

const updateUserRole = async (id: string, role: string) => {
  const data = await UserModel.findByIdAndUpdate(
    id,
    { role },
    { new: true, runValidators: true }
  );
  return data;
};



export const UserService = { createUser, updateUser, deleteUser, updateUserRole };
