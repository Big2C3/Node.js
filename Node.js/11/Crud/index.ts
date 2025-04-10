import express from "express";
import morgan from "morgan";
import planetsRouter from "./routes/planets";

const app = express();
app.use(morgan("dev")); // Log delle richieste HTTP
app.use(express.json()); // Middleware per parsing JSON

// Aggiungi il router delle rotte
app.use("/api", planetsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});
