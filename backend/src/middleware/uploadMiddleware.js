import multer from "multer";
import fs from "fs";
import path from "path";

// Each route sets req.uploadType ("profile" | "cover" | "post") before this
// middleware runs, so we drop the file into the matching folder.
const FOLDERS = {
  profile: "uploads/profiles",
  cover: "uploads/covers",
  post: "uploads/posts",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = FOLDERS[req.uploadType] || "uploads/misc";
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || ".jpg";
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, unique);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export default upload;
