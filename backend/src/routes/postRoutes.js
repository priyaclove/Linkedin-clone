import express from "express";
import { getPosts, createPost } from "../controllers/postController.js";

const router = express.Router();

router.get("/all_posts", getPosts);
router.post("/", createPost);

export default router;
