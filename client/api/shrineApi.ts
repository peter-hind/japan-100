import request from 'superagent'
import Shrine from '../../models/shrine.ts'
export async function getShrine(title: string): Promise<Shrine> {
  const res = await request.get(`/api/v1/shrines100/${title}`)
  return res.body
}

export async function getVisitorShrines(sub: string): Promise<any> {
  const res = await request.get(`/api/v1/shrines100/user/${sub}`)
  console.log('apiclient usershrines', res.body)
  return res.body
}
export async function visitShrine(sub: string, shrine: number): Promise<any> {
  const res = await request
    .post('/api/v1/shrines100')
    .set('Content-Type', 'application/json')
    .send({ sub, shrine })
  return res.body
}
