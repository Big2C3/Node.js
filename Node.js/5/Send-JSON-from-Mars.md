Il nostro server HTTP invia ora un corpo di risposta JSON.

Cambia la posizione nella risposta a "Marte".
Esegui il server e inviagli una richiesta con curl utilizzando il flag --verbose.
Qual è il valore dell'intestazione di risposta Content-Length?
Dovrebbe esserci un unico script che:

Importa il modulo http core di Node.js (o con node:http).
Crea un server HTTP con il metodo http.createServer.
Imposta l'intestazione della risposta: Content-Type: application/json
Invia il corpo della risposta JSON: { location: "Mars" }
Il valore dell'intestazione di risposta Content-Length è 19.