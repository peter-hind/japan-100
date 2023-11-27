import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import mountains from './routes/mountains'
import castles from './routes/castles'
import onsens from './routes/onsens'
import shrines from './routes/shrines'
import blossoms from './routes/blossoms'
import users from './routes/users'
import dotenv from 'dotenv'

dotenv.config()

const server = express()

server.use(express.json())
server.use(cors('*' as CorsOptions))

server.use('/api/v1/castles100', castles)
server.use('/api/v1/mountains100', mountains)
server.use('/api/v1/onsens100', onsens)
server.use('/api/v1/shrines100', shrines)
server.use('/api/v1/blossoms100', blossoms)
server.use('/api/v1/users', users)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
