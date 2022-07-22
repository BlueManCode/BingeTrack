import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import errorCode from '../errorCodes.js'

dotenv.config()

export default (req, res, next) => {
  const { token } = req.cookies
  console.log(token)
  if(!token) {
    res.status(errorCode.INVALID_TOKEN_PROVIDED.code)
    next(new Error(errorCode.INVALID_TOKEN_PROVIDED.message))
  } 
  else {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if(err) {
        res.status(errorCode.INVALID_TOKEN_PROVIDED.code)
        next(new Error(errorCode.INVALID_TOKEN_PROVIDED.message))
      }
      else {
        req.userID = decoded.userID
        req.userName = decoded.userName
        next()
      } 
    })
  }
}