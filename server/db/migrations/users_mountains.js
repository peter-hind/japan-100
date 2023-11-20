export async function up(knex) {
  return knex.schema.createTable('users_mountains', (table) => {
    table.string('sub')
    table.string('peak_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('exampleTable')
}
