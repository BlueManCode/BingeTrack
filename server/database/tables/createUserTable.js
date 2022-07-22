/**
 * @param {import client from '../config.js'} client
 */

export const createUserTable = (client) => {
  const userTable = `
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
  `
  client.query(userTable, (err, res) => {
    if(err) console.log(err)
    else console.log("User Table Created")
  })
} 