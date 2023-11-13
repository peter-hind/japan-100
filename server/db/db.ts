import connection from './connection'

const db = connection

export function fetchMountain(title: string) {
  return db.select('*').from('mountains100').where({ name: title }).first()
}
