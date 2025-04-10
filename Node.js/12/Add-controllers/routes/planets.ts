import express from "express";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "../controllers/planets";

const router = express.Router();

// Associo le rotte ai controller
router.get("/planets", getAll);
router.get("/planets/:id", getOneById);
router.post("/planets", create);
router.put("/planets/:id", updateById);
router.delete("/planets/:id", deleteById);

export default router;
