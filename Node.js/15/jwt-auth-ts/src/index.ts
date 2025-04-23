import express from "express";
import dotenv from "dotenv";
import passport from "./passport";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();
app.use(express.json()); // Per leggere JSON nel body
app.use(passport.initialize()); // Inizializza passport

app.use("/api/auth", authRoutes); // Monta il router authRoutes su /api/auth

// Rotta protetta
app.get(
  "/api/protected",
  passport.authenticate("jwt", { session: false }),
  (req: express.Request, res: express.Response) => {
    res.json({ message: "Accesso autorizzato!" });
  }
);

app.listen(3000, () => {
  console.log("✅ Server attivo su http://localhost:3000");
});