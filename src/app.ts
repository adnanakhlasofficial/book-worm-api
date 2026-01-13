import compression from "compression";
import cors from "cors";
import express from "express";
import globalError from "./middlewares/globalError.middleware";
import cookieParser from "cookie-parser";
import { env } from "./configs/env";
import router from "./routes";
import { formatTime } from "./utils/formatTime";

const app = express();

// Middleware
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  })
); // Enables Cross-Origin Resource Sharing
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse incoming cookies request
app.use("/api/v1", router); // Mount all API v1 routes under /api/v1

// Default route for testing
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Book Worm API is running.",
    path: req.path,
    uptime: formatTime(process.uptime()),
  });
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
