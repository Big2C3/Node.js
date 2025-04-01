import { createServer } from "node:http"; 
//nuova istanza del server
const server = createServer((request, response) => {  
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    // "<html><body><h1>This page was served with Node.js!</h1></body></html>"
    "<html><body><h1>Ciao amico! Io sono Cristian e ti do il benvenuto in Node.js!</h1></body></html>" //Messaggio presonalizzato
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});


//* riga 1 - importato metodo createService dal modulo HTTP principale di Node.js
//* riga 3 - forniamo al metodo createServer una funzione di callback,che accetta 2 parametri richiesta e risposta. 
//*          Accettiamo le richieste che ci arrivano e vogliamo essere in grado di rispedire le risposte a tali richieste
//*          ovvero ricevere un oggetto di mess in arrivo e un oggetto di risposta del server
//*          Abbreviati req, res

//* riga 4 - produciamo un mess al terminale quando il server riceve una richiesta

//* riga 6 - codice HTTP sull'oggetto risposta, 200 risposta positiva

//* riga 8 - aggiungiamo alla risposta una nuova intestazione, invieremo un corpo di risposta formattato come HTML

//* riga 10 - aggiungiamo metodo finale per dire che questa è la fine della nostra risposta, aggiungendo stringa HTML in
//*           modo che questo sia un documento HTML, apriamo tag body, invieremo un'intestazione h1 "questa pagina è stata servita con Node.js"
//*           poi si chiudono i tag e body

//* riga 15 - x far funzionare il nostro server dobbiamo dirlo al server che vogliamo ascoltare le nuove connessioni
//*           passiamo 2 argomenti, il primo èla porta su cui vogliamo che il nostro server ascolti, il secondo è una funzione di
//*           callback e all'interno di questa callback dirà che la console esegirà il logout con un messaggio su cosa sta succedendo
//*           qnd diremo che il server è in esecuzione su HTTP localhost su porta 3000.

//TODO  crist@DESKTOP-FAE2SJD MINGW64 ~/Desktop/Full stack/Full stack/Esercizi/2025/Marzo-25/Node.js/Node.js/4 (main)
//TODO  $ node 04-01-server.mjs
//TODO  Server running at http://localhost:3000