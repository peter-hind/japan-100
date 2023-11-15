import User from '../../models/user'
import connection from './connection'

const db = connection

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

export function fetchMountain(title: string) {
  return db.select('*').from('mountains100').where({ name: title }).first()
}

export function fetchCastle(title: string) {
  return db.select('*').from('castles100').where({ name: title }).first()
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

export async function visitCastle(currentUser: string, castle: number) {
  const visited = await db('users_castles')
    .where('sub', currentUser)
    .where('castle_id', castle)
    .first()
  if (visited) {
    return null
  }
  return db('users_castles')
    .where('sub', currentUser)
    .insert({
      sub: currentUser,
      castle_id: castle,
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

export async function fetchVisitorCastles(sub: string) {
  return db
    .select('users_castles.castle_id')
    .from('users_castles')
    .where('sub', sub)
    .join('castles100', 'users_castles.castle_id', 'castles100.id')
}
