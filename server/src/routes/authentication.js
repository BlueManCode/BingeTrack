import express from 'express'
import errorCode from '../errorCodes.js'
import axios from 'axios'
import { psqlQuery } from '../../database/psqlQuery.js'
import { generateJWT } from '../helper/generateToken.js'

const router = express.Router()

router.post('/login/oauth/discord', async (req, res, next) => {
  const { token } = req.body

  // check if token was provided
  if (!token || token === '') {
    res.status(errorCode.DISCORD_AUTH_TOKEN_NOT_PROVIDED.code)
    next(new Error(errorCode.DISCORD_AUTH_TOKEN_NOT_PROVIDED.message))
  }

  try {
    // make a request to the discord api to validate user token and get user information
    const userData = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        "Authorization": 'Bearer ' + token
      }
    })

    // access_token was valid
    const psql = new psqlQuery()
    const { id, username, email } = userData.data

    // check if user already in the database
    psql.checkUser(id)
    .then((result) => {
      console.log(result)
      // generate a jwt and send to the user
      generateJWT(res, next, {userID: result.userID, userName: result.userName})
    })
    .catch((err) => {
      // insert the new user
      psql.insertUser(id, username, email)
      .then((result) => {
        // generate a jwt and send to the user
        generateJWT(res, next, {userID: result.userID, userName: result.userName})
      })
      .catch(err => {
        next(new Error(err))
      })
    })

  // error during axios request, probably discord token was not valid
  } catch (error) {
    // access_token was not valid
    res.status(errorCode.INVALID_DISCORD_TOKEN.code)
    next(new Error(errorCode.INVALID_DISCORD_TOKEN.message))
  }
})

export default router