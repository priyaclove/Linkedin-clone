import prisma from "../config/prisma.js";

// GET /api/skills?q=re   → list skills (optionally filtered by search text)
export const getAllSkills = async (req, res) => {
  try {
    const q = (req.query.q || "").trim();

    const skills = await prisma.skill.findMany({
      where: q ? { name: { contains: q } } : undefined,
      select: { id: true, name: true },
      orderBy: { name: "asc" },
      take: 50,
    });

    res.status(200).json({ skills });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// GET /api/interests?q=de   → list interests (optionally filtered by search text)
export const getAllInterests = async (req, res) => {
  try {
    const q = (req.query.q || "").trim();

    const interests = await prisma.interest.findMany({
      where: q ? { name: { contains: q } } : undefined,
      select: { id: true, name: true },
      orderBy: { name: "asc" },
      take: 50,
    });

    res.status(200).json({ interests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
