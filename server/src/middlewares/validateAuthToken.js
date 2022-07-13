import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default (req, res, next) => {
  const { token } = req.cookies

  if(!token) next(new Error("Authentication Token Not Provided"))
  else {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if(err) next(new Error("Invalid Token Provided"))
      else {
        req.userID = decoded.id
        req.username = decoded.username
        next()
      } 
    })
  }
}