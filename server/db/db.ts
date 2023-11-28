import { UserSnakeCase } from '../../models/users'
import connection from './connection'

const db = connection

export async function addUser(newUser: UserSnakeCase): Promise<any[]> {
  const result = await db('users')
    .insert(newUser)
    .returning([
      'id',
      'auth0_id as auth0Id',
      'username',
      'first_name as firstName',
      'surname',
      'location',
      'picture',
      'email',
    ])
  console.log('line 15', result)
  return result
}
export async function getAllUsers() {
  const users = await db('users').select([
    'id',
    'auth0_id as auth0Id',
    'username',
    'first_name as firstName',
    'surname',
    'location',
    'picture',
    'email',
  ])
  return users
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

export async function fetchAllFeatures(layer: string) {
  return db.select('*').from(`${layer}`)
}

export async function deleteFeature(
  layer: string,
  currentUser: string,
  feature: number
) {
  return db(`users_${layer}`)
    .where('sub', currentUser)
    .where('feature_id', feature)
    .del()
    .returning('*')
}

export async function fetchVisitorFeatures(layer: string, sub: string) {
  return db
    .select(`users_${layer}.feature_id`)
    .from(`users_${layer}`)
    .where('sub', sub)
}
