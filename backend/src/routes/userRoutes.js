import express from "express";

import {
    getUserByUsername,
    getAllUsers,
    getCurrentUser,
    updateProfileImage,
    updateCoverImage,
    addSkill,
    removeSkill,
    addInterest,
    removeInterest
} from "../controllers/userController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();


// GET USER
router.get("/:username", getUserByUsername);


// GET ALL USERS
router.get("/", getAllUsers);

router.get("/me", getCurrentUser);

// PROFILE IMAGE
router.put(
    "/:id/profile-image",
    (req, res, next) => {
        req.uploadType = "profile";
        next();
    },
    upload.single("image"),
    updateProfileImage
);


// COVER IMAGE
router.put(
    "/:id/cover-image",
    (req, res, next) => {
        req.uploadType = "cover";
        next();
    },
    upload.single("image"),
    updateCoverImage
);


// SKILLS
router.post("/:id/skills", addSkill);
router.delete("/:id/skills/:skillId", removeSkill);


// INTERESTS
router.post("/:id/interests", addInterest);
router.delete("/:id/interests/:interestId", removeInterest);


export default router;