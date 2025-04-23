import { Request, Response } from 'express';
import pool from '../db/pool';

export const logout = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id; // tipo any se non hai definito interfaccia
    await pool.query('UPDATE users SET token=NULL WHERE id=$1', [userId]);
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error during logout' });
  }
};
