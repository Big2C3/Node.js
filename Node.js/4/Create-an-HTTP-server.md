Il nostro server HTTP invia un corpo di risposta HTML. Sostituisci il testo nell'HTML con il tuo messaggio. Esegui il server e usa il tuo browser web per testare le tue modifiche.

Importa il modulo http core di Node.js (o con node:http).
Crea un server HTTP con il metodo http.createServer.
Imposta il codice di stato della risposta su 200
Imposta l'intestazione della risposta: Content-Type: text/html
Invia un corpo di risposta HTML contenente un messaggio.
Fai in modo che il server ascolti la porta 3000
