// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users_mountains').del()
  await knex('users_castles').del()
  await knex('users_onsens').del()
  await knex('users').del()
  await knex('castles100').del()
  await knex('mountains100').del()
  await knex('onsens100').del()
}
