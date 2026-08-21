import express from "express";
import { getUserByUsername } from "../controllers/userController.js";

const router = express.Router();

router.get("/:username", getUserByUsername);

export default router;
