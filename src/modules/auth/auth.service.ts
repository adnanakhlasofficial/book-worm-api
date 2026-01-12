import bcrypt from "bcryptjs";
import { env } from "../../configs/env";
import { generateToken } from "../../utils/jwt";
import { UserModel } from "../user/user.model";
import { ILoginPayload } from "./auth.types";

const login = async (payload: ILoginPayload) => {
  const user = await UserModel.findOne({ email: payload.email });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const isPasswordValid = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const userPayload = {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = await generateToken(
    userPayload,
    env.JWT_ACCESS_SECRET,
    env.JWT_ACCESS_EXPIRES_AT
  );

  return {
    accessToken,
    userPayload,
  };
};

export const AuthService = { login };
