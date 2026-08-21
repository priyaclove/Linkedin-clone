import prisma from "../config/prisma.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });

    // Never send the password back to the client.
    return res.status(201).json({
      message: "User created successfully",
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error(error);
    // Prisma unique-constraint violation (email/username already taken).
    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ message: "An account with that email or username already exists" });
    }
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Each branch now returns, so we never send more than one response.
    if (!user) {
      return res.status(404).json({ message: "No user found with that email" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    return res.status(200).json({
      message: "User logged in successfully",
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
