import request from 'superagent'
import Onsen from '../../models/onsen'
export async function getOnsen(title: string): Promise<Onsen> {
  const res = await request.get(`/api/v1/onsens100/${title}`)
  return res.body
}

export async function getVisitorOnsens(sub: string): Promise<any> {
  const res = await request.get(`/api/v1/onsens100/user/${sub}`)
  console.log('apiclient useronsens', res.body)
  return res.body
}
export async function visitOnsen(sub: string, onsen: number): Promise<any> {
  const res = await request
    .post('/api/v1/onsens100')
    .set('Content-Type', 'application/json')
    .send({ sub, onsen })
  return res.body
}
