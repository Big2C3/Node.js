import express from "express";
import passport from "./passport";

const app = express();
app.use(passport.initialize());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
