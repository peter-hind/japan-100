import request from 'superagent'
import Mountain from '../models/mountain'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}

export async function getMountain(title: string): Promise<Mountain> {
  const res = await request.get(`/api/v1/mountains100/${title}`)
  return res.body
}
