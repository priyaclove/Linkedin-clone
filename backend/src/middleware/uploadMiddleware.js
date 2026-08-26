import multer from "multer";
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Cloudinary auto-reads the CLOUDINARY_URL env var when present.
cloudinary.config();
const cloudinaryEnabled = Boolean(cloudinary.config().cloud_name);

// Each route sets req.uploadType ("profile" | "cover" | "post").
const FOLDERS = {
  profile: "profiles",
  cover: "covers",
  post: "posts",
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"));
  }
};

let storage;

if (cloudinaryEnabled) {
  // Production: store images on Cloudinary (survives ephemeral hosts).
  storage = new CloudinaryStorage({
    cloudinary,
    params: async (req) => ({
      folder: `linkedin-clone/${FOLDERS[req.uploadType] || "misc"}`,
      resource_type: "image",
    }),
  });
  console.log("🖼  Uploads: Cloudinary");
} else {
  // Local dev: store images on disk under uploads/*.
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = `uploads/${FOLDERS[req.uploadType] || "misc"}`;
      fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname) || ".jpg";
      const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
      cb(null, unique);
    },
  });
  console.log("🖼  Uploads: local disk (set CLOUDINARY_URL for cloud storage)");
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export default upload;
