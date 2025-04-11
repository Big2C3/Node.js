import { Request, Response } from "express";
import db from "../db";

export const getAllPlanets = async (req: Request, res: Response) => {
  const planets = await db.any("SELECT * FROM planets;");
  res.json(planets);
};

export const getPlanetById = async (req: Request, res: Response) => {
  const planet = await db.oneOrNone("SELECT * FROM planets WHERE id=$1;", [
    req.params.id,
  ]);
  planet ? res.json(planet) : res.status(404).send("Not Found");
};

export const createPlanet = async (req: Request, res: Response) => {
  const { name } = req.body;
  await db.none("INSERT INTO planets (name) VALUES ($1);", [name]);
  res.status(201).send("Planet created");
};

export const updatePlanet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none("UPDATE planets SET name=$2 WHERE id=$1;", [id, name]);
  res.send("Planet updated");
};

export const deletePlanet = async (req: Request, res: Response) => {
  await db.none("DELETE FROM planets WHERE id=$1;", [req.params.id]);
  res.send("Planet deleted");
};
