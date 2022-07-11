import bcrypt from 'bcrypt'
import generateToken from './generateToken.js'

export default (user, next, res, password) => {
  bcrypt.compare(password, user.password)
    .then(isPasswordMatch => {
      if(!isPasswordMatch) next(new Error("Password did not match, try again."))
      else generateToken(res, user, next)
  })
}