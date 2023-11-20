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

export function fetchOnsen(title: string) {
  return db.select('*').from('onsens100').where({ name: title }).first()
}

export function fetchShrine(title: string) {
  return db.select('*').from('shrines100').where({ name: title }).first()
}

export function fetchBlossom(title: string) {
  return db.select('*').from('blossoms100').where({ name: title }).first()
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

export async function visitOnsen(currentUser: string, onsen: number) {
  const visited = await db('users_onsens')
    .where('sub', currentUser)
    .where('spring_id', onsen)
    .first()
  if (visited) {
    return null
  }
  return db('users_onsens')
    .where('sub', currentUser)
    .insert({
      sub: currentUser,
      spring_id: onsen,
    })
    .returning('*')
}

export async function visitShrine(currentUser: string, shrine: number) {
  const visited = await db('users_shrines')
    .where('sub', currentUser)
    .where('shrine_id', shrine)
    .first()
  if (visited) {
    return null
  }
  return db('users_shrines')
    .where('sub', currentUser)
    .insert({
      sub: currentUser,
      shrine_id: shrine,
    })
    .returning('*')
}

export async function visitBlossom(currentUser: string, blossom: number) {
  const visited = await db('users_blossoms')
    .where('sub', currentUser)
    .where('blossom_id', blossom)
    .first()
  if (visited) {
    return null
  }
  return db('users_blossoms')
    .where('sub', currentUser)
    .insert({
      sub: currentUser,
      blossom_id: blossom,
    })
    .returning('*')
}

export async function fetchClimberMountains(sub: string) {
  return db
    .select('users_mountains.peak_id')
    .from('users_mountains')
    .where('sub', sub)
}

export async function fetchVisitorCastles(sub: string) {
  return db
    .select('users_castles.castle_id')
    .from('users_castles')
    .where('sub', sub)
}

export async function fetchVisitorOnsens(sub: string) {
  return db
    .select('users_onsens.spring_id')
    .from('users_onsens')
    .where('sub', sub)
}

export async function fetchVisitorShrines(sub: string) {
  return db
    .select('users_shrines.shrine_id')
    .from('users_shrines')
    .where('sub', sub)
}

export async function fetchVisitorBlossoms(sub: string) {
  return db
    .select('users_blossoms.blossom_id')
    .from('users_blossoms')
    .where('sub', sub)
}
