export async function up(knex) {
  return knex.schema.createTable('users_onsens100', (table) => {
    table.string('sub')
    table.string('feature_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users_onsens100')
}
