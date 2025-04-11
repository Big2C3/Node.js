import pgPromise from "pg-promise";

const pgp = pgPromise();

const db = pgp({
  host: "localhost",
  port: 5432,
  database: "space_db",
  user: "postgres",
  password: "123456",
});

export default db;
