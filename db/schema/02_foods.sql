DROP TABLE IF EXISTS foods CASCADE;

CREATE TABLE foods (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR (255) NOT NULL,
  category VARCHAR (255) NOT NULL,
  price SMALLINT NOT NULL,
  description TEXT NOT NULL,
  food_url TEXT NOT NULL
);
