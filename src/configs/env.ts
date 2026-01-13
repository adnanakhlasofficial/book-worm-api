import dotenv from "dotenv";
dotenv.config();

interface IENV {
  PORT: string;
  NODE_ENV: string;
  MONGODB_URI: string;
  FRONTEND_URL: string;
  BCRYPT_SALT_ROUND: string;
  JWT_ACCESS_SECRET: string;
  JWT_ACCESS_EXPIRES_AT: string;
  ADMIN_EMAIL: string;
  ADMIN_PASS: string;
  USER_EMAIL: string;
  USER_PASS: string;
}

const REQUIRED_ENV_KEYS: (keyof IENV)[] = [
  "PORT",
  "NODE_ENV",
  "MONGODB_URI",
  "FRONTEND_URL",
  "BCRYPT_SALT_ROUND",
  "JWT_ACCESS_SECRET",
  "JWT_ACCESS_EXPIRES_AT",
  "ADMIN_EMAIL",
  "ADMIN_PASS",
  "USER_EMAIL",
  "USER_PASS",
];

function loadEnv(): IENV {
  const env = {} as IENV;

  for (const key of REQUIRED_ENV_KEYS) {
    const value = process.env[key];
    if (!value) throw new Error(`Missing required env: ${key}`);
    env[key] = value;
  }

  return env;
}

export const env = loadEnv();
