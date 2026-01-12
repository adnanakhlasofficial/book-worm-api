import dotenv from "dotenv";
dotenv.config();

interface IENV {
  PORT: string;
  NODE_ENV: string;
  MONGODB_URI: string;
  FRONTEND_URL: string;
}

const REQUIRED_ENV_KEYS: (keyof IENV)[] = [
  "PORT",
  "NODE_ENV",
  "MONGODB_URI",
  "FRONTEND_URL",
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