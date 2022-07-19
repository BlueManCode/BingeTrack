import client from  './config.js'

export class psqlQuery {

  getUser = ({ username }) => {
    client.query(`SELECT id FROM "user" WHERE username='${username}'`)
    .then((result) => {
     res.send(result.rows)
    })
    .catch((err) =>  next(new Error('Error While Getting to the database')))
  }

  putUser = () => {

  }

  handleError = () => {

  }

} 