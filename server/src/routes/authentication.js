import express from 'express'
import userModel from '../DB/Models/userModel.js'
import handlePasswordCheck from '../helper/handlePasswordCheck.js'
import handleUserRegistration from '../helper/handleUserRegistration.js'

const router = express.Router()

router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  
  if(!username || !password) next(new Error("No Username or Password provided"))
  else {
    // check if the username exist in the database
    userModel.findOne({username: username})
      .then((user) => {
        if(!user) 
          next(new Error("Username does not exist")) 
        else 
          handlePasswordCheck(user, next, res, password)
      })
      .catch(err => next(new Error("Database query error")))
  }
})

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body
  
  if(!username || !password) next(new Error("No Username or Password provided"))

  else {

    // check if the user already in the database
    userModel.findOne({username: username})
      .then((user) => {
        // username already exist
        if(user)
          next(new Error("Username Already Exist"))
        // register the new user
        else 
          handleUserRegistration(res, next, password, username)
      })
      .catch((error) => {
        next(new Error("Database query error"))
      })
  }
})

export default router