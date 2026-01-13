import { env } from "../configs/env";
import { UserModel } from "../modules/user/user.model";
import { UserRole } from "../modules/user/user.types";
import bcrypt from "bcryptjs";

export const seedAdminUser = async () => {
  const adminPassword = await bcrypt.hash(
    env.ADMIN_PASS,
    Number(env.BCRYPT_SALT_ROUND)
  );

  const admin = {
    email: env.ADMIN_EMAIL,
    name: "Admin User",
    profile: "https://i.pravatar.cc/150?img=4",
    role: UserRole.ADMIN,
    password: adminPassword,
  };

  const existingAdmin = await UserModel.findOne({ email: admin.email });
  if (!existingAdmin) {
    await UserModel.create(admin);
    console.log("✅ Admin user seeded");
  } else {
    console.log("ℹ️ Admin user already exists");
  }
};

export const seedNormalUser = async () => {
  const userPassword = await bcrypt.hash(
    env.USER_PASS,
    Number(env.BCRYPT_SALT_ROUND)
  );

  const user = {
    email: env.USER_EMAIL,
    name: "Normal User",
    profile: "https://i.pravatar.cc/150?img=5",
    role: UserRole.USER,
    password: userPassword,
  };

  const existingUser = await UserModel.findOne({ email: user.email });
  if (!existingUser) {
    await UserModel.create(user);
    console.log("✅ Normal user seeded");
  } else {
    console.log("ℹ️ Normal user already exists");
  }
};
