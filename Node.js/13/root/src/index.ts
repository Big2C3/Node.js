import express from "express";
import {
  getAllPlanets,
  getPlanetById,
  createPlanet,
  updatePlanet,
  deletePlanet,
} from "./controllers/planetsController";

const app = express();
app.use(express.json());

app.get("/planets", getAllPlanets);
app.get("/planets/:id", getPlanetById);
app.post("/planets", createPlanet);
app.put("/planets/:id", updatePlanet);
app.delete("/planets/:id", deletePlanet);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
