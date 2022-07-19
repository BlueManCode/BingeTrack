import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const client = new pg.Client({
  user: process.env.POSTGRES_USER,
  // host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
})

client.connect((err) => {
  if(err) console.err("Error Connecting To Postgres Database")
  else console.log('Postgres Database Connected')
})

export default client

