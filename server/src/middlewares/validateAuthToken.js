import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default (req, res, next) => {
  const { authtoken } = req.headers

  if(!authtoken) next(new Error("Authentication Token Not Provided"))
  else {
    jwt.verify(authtoken, process.env.TOKEN_SECRET, (err, decoded) => {
      if(err) next(new Error("Invalid Token Provided"))
      else {
        req.userID = decoded.id
        req.username = decoded.username
        next()
      } 
    })
  }
}