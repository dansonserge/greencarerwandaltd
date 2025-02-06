import path from "path";
import fs from "fs";
import multer from "multer";
import sharp from "sharp";

const uploadDir = path.join(process.cwd(), "public/uploads");

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

export const uploadImage = async (file: any): Promise<string> => {
  const filePath = file.name;
  console.log("file path debug", filePath)
  const optimizedPath = filePath.replace(/\.[^.]+$/, ".webp");

  await sharp(filePath)
    .resize(800)
    .webp({ quality: 80 })
    .toFile(optimizedPath);

  fs.unlinkSync(filePath); // Delete original file

  return `/uploads/${path.basename(optimizedPath)}`;
};

export default upload;
