import request from 'superagent'
import Feature from '../../models/Ifeature.ts'

const rootUrl = '/api/v1'

export async function getFeature(
  layer: string,
  title: string
): Promise<Feature> {
  const res = await request.get(`${rootUrl}/${layer}/${title}`)
  return res.body
}

export async function getVisitorFeatures(
  layer: string,
  sub: string
): Promise<any> {
  const res = await request.get(`${rootUrl}/${layer}/user/${sub}`)
  console.log('apiclient userblossoms', res.body)
  return res.body
}
export async function visitFeature(
  layer: string,
  sub: string,
  feature: number
): Promise<any> {
  const res = await request
    .post(`/api/v1/${layer}`)
    .set('Content-Type', 'application/json')
    .send({ sub, feature })
  return res.body
}
