import { Router, Request, Response } from 'express';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// ✅ REGISTRAZIONE - crea nuovo utente e ritorna i suoi dati
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Cripta la password con bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Salva l'utente nel database
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashedPassword]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Errore durante la registrazione:', err);
    res.status(500).json({ message: 'Errore durante la registrazione' });
  }
});

// ✅ LOGIN - verifica credenziali, genera e restituisce JWT
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Cerca l'utente nel DB
    const userRes = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = userRes.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Utente non trovato' });
    }

    // Confronta le password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Password errata' });
    }

    // Genera il token JWT
    const token = jwt.sign({ id: user.id }, process.env.SECRET as string, {
      expiresIn: '1h', // opzionale: scadenza del token
    });

    // Salva il token nel DB (opzionale)
    await pool.query('UPDATE users SET token = $1 WHERE id = $2', [token, user.id]);

    res.json({ token });
  } catch (err) {
    console.error('Errore durante il login:', err);
    res.status(500).json({ message: 'Errore durante il login' });
  }
});

export default router;