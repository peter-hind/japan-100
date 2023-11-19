export async function up(knex) {
  return knex.schema.createTable('users_blossoms', (table) => {
    table.string('sub')
    table.string('blossom_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users_blossoms')
}
