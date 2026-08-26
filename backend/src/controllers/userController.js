import prisma from "../config/prisma.js";
import fs from "fs";
import path from "path";

// ============================================================
// LIST USERS  → GET /api/users?exclude=<id>   (People you may know)
// ============================================================

export const getAllUsers = async (req, res) => {
    try {
        const exclude = req.query.exclude ? Number(req.query.exclude) : undefined;

        const users = await prisma.user.findMany({
            where: exclude ? { id: { not: exclude } } : undefined,
            select: {
                id: true,
                username: true,
                about: true,
                city: true,
                state: true,
                country: true,
                profileImage: true,
            },
            orderBy: { createdAt: "desc" },
            take: 50,
        });

        return res.status(200).json({ users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};


// ============================================================
// GET USER BY USERNAME
// ============================================================

export const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        username,
      },

      select: {
        id: true,
        username: true,
        email: true,
        about: true,

        profileImage: true,
        coverImage: true,

        city: true,
        state: true,
        country: true,
        phone: true,

        createdAt: true,

        posts: {
          orderBy: {
            createdAt: "desc",
          },

          select: {
            id: true,
            content: true,
            imageUrl: true,
            createdAt: true,
          },
        },

        skills: {
          select: {
            skill: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },

        interests: {
          select: {
            interest: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const formattedUser = {
      ...user,

      skills: user.skills.map((item) => item.skill),

      interests: user.interests.map((item) => item.interest),
    };

    return res.status(200).json({
      user: formattedUser,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

// ============================================================
// DELETE OLD IMAGE FROM DISK
// ============================================================

const deleteImageFile = (imagePath) => {
  if (!imagePath) return;

  try {
    const cleanPath = imagePath.split("?")[0];

    if (!cleanPath.startsWith("/uploads/")) {
      return;
    }

    const filePath = path.join(process.cwd(), cleanPath.replace(/^\/+/, ""));

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    console.error("Could not delete old image:", error);
  }
};

// ============================================================
// UPDATE PROFILE IMAGE
// ============================================================

export const updateProfileImage = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },

      select: {
        id: true,
        profileImage: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // DELETE IMAGE
    if (req.body.delete === "true") {
      deleteImageFile(user.profileImage);

      const updatedUser = await prisma.user.update({
        where: {
          id: Number(id),
        },

        data: {
          profileImage: null,
        },

        select: {
          id: true,
          username: true,
          profileImage: true,
          coverImage: true,
        },
      });

      return res.status(200).json({
        message: "Profile image deleted",
        user: updatedUser,
      });
    }

    // NO IMAGE
    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    // DELETE OLD IMAGE
    deleteImageFile(user.profileImage);

    // NEW IMAGE PATH (Cloudinary URL in prod, /uploads path in local dev)
    const imagePath = req.file.path?.startsWith("http")
      ? req.file.path
      : `/uploads/profiles/${req.file.filename}`;

    // SAVE PATH TO DATABASE
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },

      data: {
        profileImage: imagePath,
      },

      select: {
        id: true,
        username: true,
        profileImage: true,
        coverImage: true,
      },
    });

    return res.status(200).json({
      message: "Profile image updated",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Profile image error:", error);

    return res.status(500).json({
      message: "Failed to update profile image",
    });
  }
};

// ============================================================
// UPDATE COVER IMAGE
// ============================================================

export const updateCoverImage = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },

      select: {
        id: true,
        coverImage: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // DELETE COVER
    if (req.body.delete === "true") {
      deleteImageFile(user.coverImage);

      const updatedUser = await prisma.user.update({
        where: {
          id: Number(id),
        },

        data: {
          coverImage: null,
        },

        select: {
          id: true,
          username: true,
          profileImage: true,
          coverImage: true,
        },
      });

      return res.status(200).json({
        message: "Cover image deleted",
        user: updatedUser,
      });
    }

    // NO IMAGE
    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    // DELETE OLD COVER
    deleteImageFile(user.coverImage);

    // NEW COVER PATH
    const imagePath = req.file.path?.startsWith("http")
      ? req.file.path
      : `/uploads/covers/${req.file.filename}`;

    // SAVE TO DATABASE
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },

      data: {
        coverImage: imagePath,
      },

      select: {
        id: true,
        username: true,
        profileImage: true,
        coverImage: true,
      },
    });

    return res.status(200).json({
      message: "Cover image updated",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Cover image error:", error);

    return res.status(500).json({
      message: "Failed to update cover image",
    });
  }
};

// ============================================================
// HELPERS — return a user's flat skills / interests lists
// ============================================================

const getUserSkills = (userId) =>
  prisma.userSkill
    .findMany({
      where: { userId },
      select: { skill: { select: { id: true, name: true } } },
      orderBy: { id: "asc" },
    })
    .then((rows) => rows.map((row) => row.skill));

const getUserInterests = (userId) =>
  prisma.userInterest
    .findMany({
      where: { userId },
      select: { interest: { select: { id: true, name: true } } },
      orderBy: { id: "asc" },
    })
    .then((rows) => rows.map((row) => row.interest));

// ============================================================
// ADD SKILL   → POST /api/users/:id/skills   body: { name }
// ============================================================

export const addSkill = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const name = (req.body.name || "").trim();

    if (!name) {
      return res.status(400).json({ message: "Skill name is required" });
    }

    // Reuse the skill row if it already exists, otherwise create it.
    const skill = await prisma.skill.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    // Link it to the user (no-op if the link already exists).
    await prisma.userSkill.upsert({
      where: { userId_skillId: { userId, skillId: skill.id } },
      update: {},
      create: { userId, skillId: skill.id },
    });

    return res.status(201).json({ skills: await getUserSkills(userId) });
  } catch (error) {
    console.error("Add skill error:", error);
    return res.status(500).json({ message: "Failed to add skill" });
  }
};

// ============================================================
// REMOVE SKILL   → DELETE /api/users/:id/skills/:skillId
// ============================================================

export const removeSkill = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const skillId = Number(req.params.skillId);

    await prisma.userSkill.deleteMany({ where: { userId, skillId } });

    return res.status(200).json({ skills: await getUserSkills(userId) });
  } catch (error) {
    console.error("Remove skill error:", error);
    return res.status(500).json({ message: "Failed to remove skill" });
  }
};

// ============================================================
// ADD INTEREST   → POST /api/users/:id/interests   body: { name }
// ============================================================

export const addInterest = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const name = (req.body.name || "").trim();

    if (!name) {
      return res.status(400).json({ message: "Interest name is required" });
    }

    const interest = await prisma.interest.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    await prisma.userInterest.upsert({
      where: { userId_interestId: { userId, interestId: interest.id } },
      update: {},
      create: { userId, interestId: interest.id },
    });

    return res.status(201).json({ interests: await getUserInterests(userId) });
  } catch (error) {
    console.error("Add interest error:", error);
    return res.status(500).json({ message: "Failed to add interest" });
  }
};

// ============================================================
// REMOVE INTEREST   → DELETE /api/users/:id/interests/:interestId
// ============================================================

export const removeInterest = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const interestId = Number(req.params.interestId);

    await prisma.userInterest.deleteMany({ where: { userId, interestId } });

    return res.status(200).json({ interests: await getUserInterests(userId) });
  } catch (error) {
    console.error("Remove interest error:", error);
    return res.status(500).json({ message: "Failed to remove interest" });
  }
};



export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get current user",
    });
  }
};