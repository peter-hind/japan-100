import request from 'superagent'
import Mountain from '../models/mountain'
import User from '../models/user'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}

export async function getMountain(title: string): Promise<Mountain> {
  const res = await request.get(`/api/v1/mountains100/${title}`)
  return res.body
}

export async function handleUser(user: User): Promise<any> {
  console.log('Apiclient', user)
  await request
    .post('/api/v1/user')
    .set('Content-Type', 'application/json')
    .send({ user })
}

export async function climbMountain(
  sub: string,
  mountain: number
): Promise<any> {
  console.log('Apiclient', sub, mountain)
  await request
    .post('/api/v1/mountains100')
    .set('Content-Type', 'application/json')
    .send({ sub, mountain })
}
