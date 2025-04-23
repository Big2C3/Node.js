import { Pool } from 'pg';
import * as dotenv from 'dotenv';

// Carica le variabili d'ambiente dal file .env
dotenv.config();

// Crea il pool di connessioni usando le variabili d'ambiente
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10), // Assicuro che il tipo sia un numero
});

export default pool;
