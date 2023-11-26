// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users_mountains100').del()
  await knex('users_castles100').del()
  await knex('users_onsens100').del()
  await knex('users_shrines100').del()
  await knex('users_blossoms100').del()
  await knex('users').del()
  await knex('castles100').del()
  await knex('mountains100').del()
  await knex('onsens100').del()
  await knex('shrines100').del()
  await knex('blossoms100').del()
}
