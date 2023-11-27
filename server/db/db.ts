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

export function fetchFeature(title: string, layer: string) {
  return db.select('*').from(`${layer}`).where({ name: title }).first()
}

export async function visitFeature(
  layer: string,
  currentUser: string,
  feature: number
) {
  const visited = await db(`users_${layer}`)
    .where('sub', currentUser)
    .where('feature_id', feature)
    .first()
  if (visited) {
    return null
  }
  return db(`users_${layer}`)
    .where('sub', currentUser)
    .insert({
      sub: currentUser,
      feature_id: feature,
    })
    .returning('*')
}

export async function fetchVisitorFeatures(layer: string, sub: string) {
  return db
    .select(`users_${layer}.feature_id`)
    .from(`users_${layer}`)
    .where('sub', sub)
}
