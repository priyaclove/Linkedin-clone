import prisma from "../config/prisma.js";

// GET /api/posts  → newest first, with author info
export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: { id: true, username: true },
        },
      },
    });

    res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// POST /api/posts  → create a post for a given author
export const createPost = async (req, res) => {
  try {
    const { content, imageUrl, authorId } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ message: "Post content is required" });
    }

    if (!authorId) {
      return res.status(400).json({ message: "You must be logged in to post" });
    }

    const post = await prisma.post.create({
      data: {
        content: content.trim(),
        imageUrl: imageUrl || null,
        authorId: Number(authorId),
      },
      include: {
        author: {
          select: { id: true, username: true },
        },
      },
    });

    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
