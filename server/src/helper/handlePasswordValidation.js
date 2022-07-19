import bcrypt from 'bcrypt'
import generateToken from './generateToken.js'

// return a token

export default  (user, next, res, password) => {
  bcrypt.compare(password, user.password)
    .then(async (isPasswordMatch) => {
      if(!isPasswordMatch) next(new Error("Password did not match, try again."))
      else {
        const token = await generateToken(res, user, next)
        return token
      }
  })
}