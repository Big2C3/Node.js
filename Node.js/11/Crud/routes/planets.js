"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planets_1 = require("../controllers/planets");
const router = (0, express_1.Router)();
// Rotte CRUD
router.get("/planets", planets_1.getAll);
router.get("/planets/:id", planets_1.getOneById);
router.post("/planets", planets_1.create);
router.put("/planets/:id", planets_1.updateById);
router.delete("/planets/:id", planets_1.deleteById);
exports.default = router;
