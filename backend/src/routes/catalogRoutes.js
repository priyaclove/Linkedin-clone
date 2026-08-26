import express from "express";
import { getAllSkills, getAllInterests } from "../controllers/catalogController.js";

const router = express.Router();

router.get("/skills", getAllSkills);
router.get("/interests", getAllInterests);

export default router;
