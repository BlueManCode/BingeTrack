import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(`access granted to ${req.username}`)
})

export default router