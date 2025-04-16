import express from "express";
import multer from "multer";
import path from "path";

import {
  getAllPlanets,
  getPlanetById,
  createPlanet,
  updatePlanet,
  deletePlanet,
  uploadPlanetImage,
} from "./controllers/planetsController";

const app = express();
app.use(express.json());

//* Serve i file nella cartella uploads (visibili via browser)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//* Setup di Multer
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

app.get("/planets", getAllPlanets);
app.get("/planets/:id", getPlanetById);
app.post("/planets", createPlanet);
app.put("/planets/:id", updatePlanet);
app.delete("/planets/:id", deletePlanet);
app.post("/planets/:id/image", upload.single("image"), uploadPlanetImage);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
