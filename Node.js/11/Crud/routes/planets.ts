import { Router } from "express";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "../controllers/planets";

const router = Router();

// Rotte CRUD
router.get("/planets", getAll);
router.get("/planets/:id", getOneById);
router.post("/planets", create);
router.put("/planets/:id", updateById);
router.delete("/planets/:id", deleteById);

export default router;
