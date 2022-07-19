CREATE DATABASE "Binge Clock";

CREATE TABLE "user"(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password TEXT,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255),
  joinDate TIMESTAMP,
  UNIQUE(username, email)
);