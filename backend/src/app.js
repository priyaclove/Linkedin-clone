import express from "express";
import path from "path";
import multer from "multer";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import catalogRoutes from "./routes/catalogRoutes.js";
import cors from "cors";
const app = express();

// Allow local dev, any Vercel preview/prod domain, and an explicit FRONTEND_URL.
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      // Non-browser requests (curl, server-to-server) have no origin.
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin) || /\.vercel\.app$/.test(new URL(origin).hostname)) {
        return cb(null, true);
      }
      return cb(null, true); // demo app: allow all origins
    },
    credentials: true,
  })
);

app.use(express.json());

// Serve uploaded images (profile / cover / post) at /uploads/*
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api", catalogRoutes);

// Turn multer/upload errors into clean JSON instead of crashing the request.
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err?.message === "Only image files are allowed") {
    return res.status(400).json({ message: err.message });
  }
  console.error(err);
  return res.status(500).json({ message: "Something went wrong" });
});

export default app;
