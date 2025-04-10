import { Request, Response } from "express";
import { db, Planet } from "../db/planets";

//* Questa variabile gestisce l'ID corrente per il nuovo pianeta
let currentId = db.planets.length;

//* Funzione per ottenere tutti i pianeti
export const getAll = (req: Request, res: Response): void => {
  res.json(db.planets); // Restituisce la lista di tutti i pianeti
};

//* Funzione per ottenere un pianeta tramite ID
export const getOneById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const planet = db.planets.find((p) => p.id === id); // Cerca il pianeta per ID

  if (planet) {
    res.json(planet); // Se trovato, restituisce il pianeta
  } else {
    res.status(404).json({ message: "Planet not found" }); //! Se non trovato, errore
  }
};

//* Funzione per creare un nuovo pianeta
export const create = (req: Request, res: Response): void => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "Name is required" }); //! Se il nome non è fornito, errore
    return; // Esce dalla funzione
  }

  const newPlanet: Planet = {
    id: ++currentId,
    name,
  };

  db.planets.push(newPlanet); // Aggiunge il nuovo pianeta alla lista
  res.status(201).json(newPlanet); // Risponde con il pianeta appena creato
};

//* Funzione per aggiornare un pianeta tramite ID
export const updateById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  let updated = false;

  //* Mappa e aggiorna il pianeta con l'ID corrispondente
  db.planets = db.planets.map((planet) => {
    if (planet.id === id) {
      updated = true;
      return { ...planet, name };
    }
    return planet;
  });

  if (updated) {
    const updatedPlanet = db.planets.find((p) => p.id === id);
    res.json({ message: "Planet updated", planet: updatedPlanet }); // Risposta con il pianeta aggiornato
  } else {
    res.status(404).json({ message: "Planet not found" }); //! Se il pianeta non esiste, errore
  }
};

//* Funzione per eliminare un pianeta tramite ID
export const deleteById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const initialLength = db.planets.length;

  //* Filtra il pianeta per eliminarlo
  db.planets = db.planets.filter((planet) => planet.id !== id);

  if (db.planets.length < initialLength) {
    res.json({ message: "Planet deleted" }); // Risposta con successo
  } else {
    res.status(404).json({ message: "Planet not found" }); //! Se il pianeta non esiste, errore
  }
};
