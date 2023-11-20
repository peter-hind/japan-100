import request from 'superagent'
import Castle from '../../models/castle'
export async function getCastle(title: string): Promise<Castle> {
  const res = await request.get(`/api/v1/castles100/${title}`)
  return res.body
}

export async function getVisitorCastles(sub: string): Promise<any> {
  const res = await request.get(`/api/v1/castles100/user/${sub}`)
  console.log('apiclient usercastles', res.body)
  return res.body
}
export async function visitCastle(sub: string, castle: number): Promise<any> {
  const res = await request
    .post('/api/v1/castles100')
    .set('Content-Type', 'application/json')
    .send({ sub, castle })
  return res.body
}
