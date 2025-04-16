import db from "./db";

const setupDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT
    );

    INSERT INTO planets (name) VALUES ('Earth'), ('Mars');
  `);

  console.log("Database setup completo");
};

setupDb();