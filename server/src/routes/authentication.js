import express from 'express'
// import handlePasswordCheck from '../helper/handlePasswordValidation.js'
// import handleUserRegistration from '../helper/handleUserRegistration.js'
// import { psqlQuery } from '../../../database/postgres/psqlQuery.js'

const router = express.Router()

router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  
  if(!username || !password) next(new Error("No Username or Password provided"))
  else {
    // check if the username exist in the database
    // userModel.findOne({username: username})
    //   .then((user) => {
    //     if(!user) 
    //       next(new Error("Username does not exist")) 
    //     else 
    //       handlePasswordValidation(user, next, res, password)
    //   })
    //   .catch(err => next(new Error("Database query error")))
  }
})

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body
  
  if(!username || !password) next(new Error("No Username or Password provided"))

  else {

    // check if the user already in the database
    // userModel.findOne({username: username})
    //   .then((user) => {
    //     // username already exist
    //     if(user)
    //       next(new Error("Username Already Exist"))
    //     // register the new user
    //     else 
    //       handleUserRegistration(res, next, password, username)
    //   })
    //   .catch((error) => {
    //     next(new Error("Database query error"))
    //   })
  }
})

export default router