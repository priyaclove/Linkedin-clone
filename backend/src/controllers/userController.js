import prisma from "../config/prisma.js";

// GET /api/users/:username  → public profile + that user's posts
export const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        posts: {
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            content: true,
            imageUrl: true,
            createdAt: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
