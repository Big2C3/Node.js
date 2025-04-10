import { Request, Response } from "express";
import Joi from "joi";
import { db, Planet } from "../db/planets";

// Schema Joi per validare i dati di un pianeta
const planetSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

// Funzione per ottenere tutti i pianeti
export const getAll = (req: Request, res: Response): void => {
  res.json(db.planets); // Restituisce l'elenco di pianeti
};

// Funzione per ottenere un pianeta tramite ID
export const getOneById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const planet = db.planets.find((p) => p.id === id);

  if (planet) {
    res.json(planet); // Risponde con il pianeta trovato
  } else {
    res.status(404).json({ msg: "Planet not found" }); // Pianeta non trovato
  }
};

// Funzione per creare un nuovo pianeta
export const create = (req: Request, res: Response): void => {
  // Validazione dei dati tramite Joi
  const { error } = planetSchema.validate(req.body);
  if (error) {
    res.status(400).json({ msg: error.details[0].message });
    return;
  }

  const newPlanet: Planet = {
    id: db.planets.length + 1,
    name: req.body.name,
  };

  db.planets.push(newPlanet); // Aggiunge il pianeta alla "database"
  res.status(201).json({ msg: "Planet created successfully" }); // Risponde con success
};

// Funzione per aggiornare un pianeta tramite ID
export const updateById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { error } = planetSchema.validate(req.body);
  if (error) {
    res.status(400).json({ msg: error.details[0].message });
    return;
  }

  let planetUpdated = false;
  db.planets = db.planets.map((planet) => {
    if (planet.id === id) {
      planetUpdated = true;
      return { ...planet, name: req.body.name };
    }
    return planet;
  });

  if (planetUpdated) {
    res.json({ msg: "Planet updated successfully" });
  } else {
    res.status(404).json({ msg: "Planet not found" });
  }
};

// Funzione per eliminare un pianeta tramite ID
export const deleteById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);

  const initialLength = db.planets.length;
  db.planets = db.planets.filter((planet) => planet.id !== id);

  if (db.planets.length < initialLength) {
    res.json({ msg: "Planet deleted successfully" });
  } else {
    res.status(404).json({ msg: "Planet not found" });
  }
};
