import express from 'express'
import { fetchFeature, visitFeature, fetchVisitorFeatures } from '../db/db'
import checkJwt, { JwtRequest } from '../auth0.ts'

const router = express.Router()
const layer = 'mountains100'

router.get('/:title', async (req, res) => {
  try {
    const title = req.params.title
    const mountain = await fetchFeature(title, layer)

    if (!mountain) {
      res.status(404).json({ message: 'Mountain not found' })
      return
    }
    res.status(200).json(mountain)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while getting posts',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

router.get('/user/:sub', async (req, res) => {
  try {
    const sub = req.params.sub
    console.log(sub)
    const mountains = await fetchVisitorFeatures(layer, sub)
    if (!mountains) {
      res.status(404).json({ message: 'Mountains not found' })
      return
    }
    res.status(200).json(mountains)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while getting list',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res) => {
  console.log(req.body)
  const currentUser = req.auth?.sub
  const mountain = req.body.feature
  if (!currentUser) {
    res.status(404).json({ message: 'Not logged in!' })
    return
  }
  const newClimb = await visitFeature(layer, currentUser, mountain)
  if (!newClimb) {
    res.status(404).json({ message: 'Something went wrong' })
    return
  }
  res.status(200).json(newClimb)
})

export default router
