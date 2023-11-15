import request from 'superagent'
import User from '../../models/user'

export async function handleUser(user: User): Promise<any> {
  console.log('Apiclient', user)
  await request
    .post('/api/v1/user')
    .set('Content-Type', 'application/json')
    .send({ user })
}
