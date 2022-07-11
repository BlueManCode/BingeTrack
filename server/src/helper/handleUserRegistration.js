import bcrypt from 'bcrypt'
import userModel from '../DB/Models/userModel.js'

const SALT_ROUND = 10

export default (res, next, password, username) => {
  bcrypt.hash(password, SALT_ROUND)
    .then((hashedPassword) => {
      const newUser = userModel({ username: username, password: hashedPassword })
      // save the new user
      newUser.save()
        .then(() => {
          res.send("New User Registered")
        })
        .catch(err => {
          next(new Error("Error Signing up"))
        })
    })
    .catch(err => {
      next(new Error("Error Hashing Password"))
    })
}