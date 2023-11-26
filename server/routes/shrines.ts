import express from 'express'
import { fetchFeature, visitFeature, fetchVisitorFeatures } from '../db/db'

const router = express.Router()
const layer = 'shrines100'

router.get('/:title', async (req, res) => {
  try {
    const title = req.params.title
    const shrine = await fetchFeature(title, layer)

    if (!shrine) {
      res.status(404).json({ message: 'Shrine not found' })
      return
    }
    res.status(200).json(shrine)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while getting Shrines',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

router.get('/user/:sub', async (req, res) => {
  try {
    const sub = req.params.sub
    console.log(sub)
    const shrines = await fetchVisitorFeatures(layer, sub)
    if (!shrines) {
      res.status(404).json({ message: 'Shrines not found' })
      return
    }
    res.status(200).json(shrines)
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
  const shrine = req.body.feature
  const newVisit = await visitFeature(layer, currentUser, shrine)
  if (!newVisit) {
    res.status(404).json({ message: 'Something went wrong' })
    return
  }
  res.status(200).json(newVisit)
})

export default router
