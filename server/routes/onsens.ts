import express from 'express'
import { fetchOnsen, visitOnsen, fetchVisitorOnsens } from '../db/db'

const router = express.Router()

router.get('/:title', async (req, res) => {
  try {
    const title = req.params.title
    const onsen = await fetchOnsen(title)

    if (!onsen) {
      res.status(404).json({ message: 'Onsen not found' })
      return
    }
    res.status(200).json(onsen)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while getting Onsens',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

router.get('/user/:sub', async (req, res) => {
  try {
    const sub = req.params.sub
    console.log(sub)
    const onsens = await fetchVisitorOnsens(sub)
    if (!onsens) {
      res.status(404).json({ message: 'Onsens not found' })
      return
    }
    res.status(200).json(onsens)
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
  const onsen = req.body.onsen
  const newVisit = await visitOnsen(currentUser, onsen)
  if (!newVisit) {
    res.status(404).json({ message: 'Something went wrong' })
    return
  }
  res.status(200).json(newVisit)
})

export default router
