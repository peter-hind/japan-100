export async function up(knex) {
  return knex.schema.createTable('users_shrines', (table) => {
    table.string('sub')
    table.string('shrine_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users_shrines')
}
