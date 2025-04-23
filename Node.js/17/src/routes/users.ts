import express from 'express';
import { logout } from '../controllers/usersController';
import { authorize } from '../middleware/authorize';

const router = express.Router();

router.get('/logout', authorize, logout); // protetta

export default router;
