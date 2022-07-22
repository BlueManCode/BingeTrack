CREATE DATABASE "Binge Clock";

CREATE TABLE "user"(
  id SERIAL PRIMARY KEY,
  userID VARCHAR(255) NOT NULL,
  userName VARCHAR(255) NOT NULL,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  joinDate TIMESTAMPTZ,
  UNIQUE(userID, userName, email)
);

INSERT INTO "user"(userName, firstName, lastName, email, joinDate) VALUES ()
