// Il nostro entry point.

require("dotenv").config(); // Per leggere .env
require("express-async-errors"); // Per gestire errori asincroni in automatico

const express = require("express");
const morgan = require("morgan");
const app = express();

const { planets } = require("./planets");

// Middleware
app.use(morgan("dev")); // Logga ogni richiesta
app.use(express.json()); // Permette di leggere JSON nel body

// Rotta semplice di test
app.get("/", (req, res) => {
  res.send("Benvenuto nel sistema solare!");
});

// Rotta per vedere i pianeti
app.get("/planets", (req, res) => {
  res.json(planets);
});

// Avvio server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});

































//*  dotenv: Carica variabili da un file .env – così non scriviamo la porta hardcoded.
//*  express: Il framework server principale.
//*  morgan: Middleware per loggare ogni richiesta HTTP.
//*  express-async-errors: Permette di gestire gli errori asincroni senza dover scrivere try/catch ovunque.