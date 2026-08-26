import express from "express";
import { getPosts, createPost } from "../controllers/postController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/all_posts", getPosts);

router.post(
  "/",
  (req, res, next) => {
    req.uploadType = "post";
    next();
  },
  upload.single("image"),
  createPost
);

export default router;
