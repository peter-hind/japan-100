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
  return res.body
}

interface visitFeature {
  layer: string
  feature: number
  token: string
}
export async function visitFeature({
  layer,
  feature,
  token,
}: visitFeature): Promise<any> {
  console.log(token)
  const res = await request
    .post(`/api/v1/${layer}`)
    .set('Authorization', `Bearer ${token}`)
    .send({ feature })
  return res.body
}

export async function resetFeature({
  layer,
  feature,
  token,
}: visitFeature): Promise<any> {
  console.log(token)
  const res = await request
    .delete(`/api/v1/${layer}`)
    .set('Authorization', `Bearer ${token}`)
    .send({ feature })
  return res.body
}
