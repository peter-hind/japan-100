export async function up(knex) {
  return knex.schema.createTable('users_onsens', (table) => {
    table.string('sub')
    table.string('spring_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users_onsens')
}
