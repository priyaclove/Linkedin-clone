import app from "./app.js";
import express from "express";
import path from "path";

const PORT = process.env.PORT || 5001;

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});