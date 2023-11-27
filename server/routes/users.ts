import express from 'express'
import { getAllUsers, addUser } from '../db/db'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    const user = await addUser(newUser)
    console.log('line20', user)
    res.json({ user })
    // res.redirect('/login')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})
export default router

router.get('/', async (req, res) => {
  const users = await getAllUsers()
  if (!users) {
    res.status(404).json({ message: 'Something went wrong' })
    return
  }
  res.status(200).json(users)
})
