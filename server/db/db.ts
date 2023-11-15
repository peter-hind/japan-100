import User from '../../models/user'
import connection from './connection'

const db = connection

export function fetchMountain(title: string) {
  return db.select('*').from('mountains100').where({ name: title }).first()
}

export async function handleUser(user: User) {
  const existingUser = await db
    .select('*')
    .from('users')
    .where({ sub: user.sub })
    .first()
  if (existingUser) {
    return updateUser(user)
  } else {
    return createUser(user)
  }
}

export function createUser(user: User) {
  return db('users').insert(user).returning('*')
}

export function updateUser(user: User) {
  return db('users').where({ sub: user.sub }).update(user).returning('*')
}

export async function climbMountain(currentUser: string, mountain: number) {
  const climbed = await db('users_mountains')
    .where('sub', currentUser)
    .where('peak_id', mountain)
    .first()
  if (climbed) {
    return null
  }
  return db('users_mountains')
    .where('sub', currentUser)
    .insert({
      sub: currentUser,
      peak_id: mountain,
    })
    .returning('*')
}

export async function fetchClimberMountains(sub: string) {
  return db
    .select('users_mountains.peak_id')
    .from('users_mountains')
    .where('sub', sub)
    .join('mountains100', 'users_mountains.peak_id', 'mountains100.id')
}
