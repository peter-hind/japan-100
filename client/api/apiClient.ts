import request from 'superagent'
import { Profile, User, UserData, UserForm } from '../../models/users.ts'

const domain = 'manaia-2023-pete.au.auth0.com'

export async function addUser(newUser: UserForm): Promise<any> {
  console.log('newUser: ', newUser)

  const sentUser: UserData = {
    client_id: 'AuMU2cLU4t5JULgPP5JyV8SZlStfjeDl',
    email: newUser.email,
    password: newUser.password,
    connection: 'japan-completionist',
  }
  await request
    .post(`https://${domain}/dbconnections/signup`)
    .send(sentUser)
    .then((res) => {
      console.log('Auth Res', res)
      addLocalUser(res.body, newUser)
    })
}

export async function addLocalUser(
  authRes: any,
  newUser: UserForm | Profile
): Promise<User[]> {
  const localUser = {
    auth0_id: `auth0|${authRes._id}`,
    username: newUser.username,
    first_name: newUser.firstName,
    surname: newUser.username,
    location: newUser.location,
    picture: newUser.picture,
    email: newUser.email,
  }
  console.log(localUser)
  const finalUser = await request.post('/api/v1/users').send(localUser)
  console.log('finalUser: ', finalUser.body)

  return finalUser.body
}

export async function completeProfile(
  authRes: string,
  newUser: UserForm | Profile
): Promise<User> {
  const localUser = {
    auth0_id: authRes,
    username: newUser.username,
    first_name: newUser.firstName,
    surname: newUser.surname,
    location: newUser.location,
    picture: newUser.picture,
    email: newUser.email,
  }
  console.log(localUser)
  const finalUser = await request.post('/api/v1/users').send(localUser)

  return finalUser.body
}

export async function getAllUsers(): Promise<User[]> {
  const response = await request.get('/api/v1/users')
  return response.body
}
