/**
 * @param {import client from '../config.js'} client
 */

export const createUserTable = (client) => {
  const userTable = `
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
  `
  client.query(userTable, (err, res) => {
    if(err) console.log(err)
    else console.log("User Table Created")
  })
} 