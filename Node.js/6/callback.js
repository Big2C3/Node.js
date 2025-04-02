const fs = require("fs");

const filePath = "output.txt";
const fileContent = "Questo è un file scritto con fs.writeFile() in Node.js!";

fs.writeFile(filePath, fileContent, "utf8", (err) => {
  if (err) {
    console.error("Errore durante la scrittura del file:", err);
    return;
  }
  console.log("File scritto con successo!");
});
console.log("Avvio script");

//  $ node callback.js
// Avvio script
// File scritto con successo!
