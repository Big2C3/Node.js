# NodeJS Part 2 :: Exercise 1 :: Set up a simple Express App

## Do

Scrivi un semplice server Express che ascolti sulla porta 3000(usa dotenv per specificare la porta)
Crea un "database" fittizio planetsutilizzando una letvariabile. (Utilizzerai questi dati in esercizi successivi.)
Configura la tua app ( app.use()) per:
accetta JSON dal client
registrare le richieste del Cliente
## Use

Database fittizio con dati iniziali:

  ```js
  type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];
  ```

- `express-async-errors`
- `morgan`
