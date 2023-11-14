import express from 'express'
import { handleUser } from '../db/db'

const router = express.Router()

router.post('/', async (req, res) => {
  console.log(req.body)
  const currentUser = req.body.user
  const response = await handleUser(currentUser)
  if (!response) {
    res.status(404).json({ message: 'Something went wrong' })
    return
  }
  res.status(200).json(response)
})

export default router
