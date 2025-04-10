"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getAll = void 0;
const joi_1 = __importDefault(require("joi"));
const planets_1 = require("../db/planets");
// Schema Joi per validare i dati di un pianeta
const planetSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).required(),
});
// Funzione per ottenere tutti i pianeti
const getAll = (req, res) => {
    res.json(planets_1.db.planets); // Restituisce l'elenco di pianeti
};
exports.getAll = getAll;
// Funzione per ottenere un pianeta tramite ID
const getOneById = (req, res) => {
    const id = parseInt(req.params.id);
    const planet = planets_1.db.planets.find((p) => p.id === id);
    if (planet) {
        res.json(planet); // Risponde con il pianeta trovato
    }
    else {
        res.status(404).json({ msg: "Planet not found" }); // Pianeta non trovato
    }
};
exports.getOneById = getOneById;
// Funzione per creare un nuovo pianeta
const create = (req, res) => {
    // Validazione dei dati tramite Joi
    const { error } = planetSchema.validate(req.body);
    if (error) {
        res.status(400).json({ msg: error.details[0].message });
        return;
    }
    const newPlanet = {
        id: planets_1.db.planets.length + 1,
        name: req.body.name,
    };
    planets_1.db.planets.push(newPlanet); // Aggiunge il pianeta alla "database"
    res.status(201).json({ msg: "Planet created successfully" }); // Risponde con success
};
exports.create = create;
// Funzione per aggiornare un pianeta tramite ID
const updateById = (req, res) => {
    const id = parseInt(req.params.id);
    const { error } = planetSchema.validate(req.body);
    if (error) {
        res.status(400).json({ msg: error.details[0].message });
        return;
    }
    let planetUpdated = false;
    planets_1.db.planets = planets_1.db.planets.map((planet) => {
        if (planet.id === id) {
            planetUpdated = true;
            return Object.assign(Object.assign({}, planet), { name: req.body.name });
        }
        return planet;
    });
    if (planetUpdated) {
        res.json({ msg: "Planet updated successfully" });
    }
    else {
        res.status(404).json({ msg: "Planet not found" });
    }
};
exports.updateById = updateById;
// Funzione per eliminare un pianeta tramite ID
const deleteById = (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = planets_1.db.planets.length;
    planets_1.db.planets = planets_1.db.planets.filter((planet) => planet.id !== id);
    if (planets_1.db.planets.length < initialLength) {
        res.json({ msg: "Planet deleted successfully" });
    }
    else {
        res.status(404).json({ msg: "Planet not found" });
    }
};
exports.deleteById = deleteById;
