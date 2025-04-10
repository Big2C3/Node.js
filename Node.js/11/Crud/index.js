"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const planets_1 = __importDefault(require("./routes/planets"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev")); // Log delle richieste HTTP
app.use(express_1.default.json()); // Middleware per parsing JSON
// Aggiungi il router delle rotte
app.use("/api", planets_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});
