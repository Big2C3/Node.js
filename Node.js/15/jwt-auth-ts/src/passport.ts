import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Connessione al DB usando la stringa nel .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Imposta opzioni per la strategia JWT
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET as string, //  forza TS a trattarlo come string
  };
  

// Definisce la strategia JWT
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const res = await pool.query("SELECT * FROM users WHERE id = $1", [
        jwt_payload.id,
      ]);
      if (res.rows.length > 0) {
        return done(null, res.rows[0]); // Utente trovato
      } else {
        return done(null, false); // Nessun utente
      }
    } catch (err) {
      return done(err, false); // Errore DB
    }
  })
);

export default passport;
