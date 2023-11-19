import request from 'superagent'
import Blossom from '../../models/blossom'
export async function getBlossom(title: string): Promise<Blossom> {
  const res = await request.get(`/api/v1/blossoms100/${title}`)
  return res.body
}

export async function getVisitorBlossoms(sub: string): Promise<any> {
  const res = await request.get(`/api/v1/blossoms100/user/${sub}`)
  console.log('apiclient userblossoms', res.body)
  return res.body
}
export async function visitBlossom(sub: string, blossom: number): Promise<any> {
  const res = await request
    .post('/api/v1/blossoms100')
    .set('Content-Type', 'application/json')
    .send({ sub, blossom })
  return res.body
}
