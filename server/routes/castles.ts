import express from 'express'
import { fetchCastle, visitCastle, fetchVisitorCastles } from '../db/db'

const router = express.Router()

router.get('/:title', async (req, res) => {
  try {
    const title = req.params.title
    const castle = await fetchCastle(title)

    if (!castle) {
      res.status(404).json({ message: 'Castle not found' })
      return
    }
    res.status(200).json(castle)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while getting Castles',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

router.get('/user/:sub', async (req, res) => {
  try {
    const sub = req.params.sub
    console.log(sub)
    const castles = await fetchVisitorCastles(sub)
    if (!castles) {
      res.status(404).json({ message: 'Castles not found' })
      return
    }
    res.status(200).json(castles)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while getting list',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const currentUser = req.body.sub
  const castle = req.body.castle
  const newVisit = await visitCastle(currentUser, castle)
  if (!newVisit) {
    res.status(404).json({ message: 'Something went wrong' })
    return
  }
  res.status(200).json(newVisit)
})

export default router
