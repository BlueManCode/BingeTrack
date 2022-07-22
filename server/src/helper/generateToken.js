import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const generateJWT = (res, next, data) => {
  jwt.sign(data, process.env.TOKEN_SECRET, (err, token) => {
    if(err) next(new Error('Error generating jwt'))
    else res.cookie('token', token, {maxAge: 900000, httpOnly: true}).send(`cookie set: ${token}`)
  })
}