import client from  './config.js'

export class psqlQuery {

  // insert user login
  insertUser = (id, username, email) => {
    return new Promise((resolve, reject) => {
      client.query('INSERT INTO "user"(userName, userID, firstName, lastName, email, joinDate) VALUES ($1, $2, $3, $4, $5, $6)',
         [id, id, username, username, email, new Date()])
      .then((result) => {
        console.log(`New User ${username} Add`)
        resolve(result.rows)
      }) 
      .catch((err) => {
        console.log(err.message)
        reject(err.message)
      })
    })
  }

  // check user login
  checkUser = (id) => {
    return new Promise((resolve, reject) => {
      client.query('SELECT * FROM "user" WHERE userID = $1', [id])
      .then((result) => {
        resolve(result.rows)
      })
      .catch((err) => {
        reject(err.message)
      })
    })
  }
} 