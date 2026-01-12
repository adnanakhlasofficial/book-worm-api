import compression from "compression";
import cors from "cors";
import express from "express";
import globalError from "./middlewares/globalError.middleware";
import cookieParser from 'cookie-parser'
import { env } from "./configs/env";

const app = express();

// Middleware
app.use(cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  })); // Enables Cross-Origin Resource Sharing
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse incoming cookies request


// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});

// Global Error handler
app.use(globalError);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
