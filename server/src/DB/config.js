import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})

let db = mongoose.connection

db.on('open', () => {
  console.log("Mongoose Database Connected")
})

db.on('error', () => {
  console.log("Database Connection Error")
})


