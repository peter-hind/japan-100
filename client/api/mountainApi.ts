import request from 'superagent'
import Mountain from '../../models/mountain'
export async function getMountain(title: string): Promise<Mountain> {
  const res = await request.get(`/api/v1/mountains100/${title}`)
  return res.body
}

export async function getClimberMountains(sub: string): Promise<any> {
  const res = await request.get(`/api/v1/mountains100/user/${sub}`)
  console.log('apiclient usermountains', res.body)
  return res.body
}
export async function climbMountain(
  sub: string,
  mountain: number
): Promise<any> {
  const res = await request
    .post('/api/v1/mountains100')
    .set('Content-Type', 'application/json')
    .send({ sub, mountain })
  return res.body
}
