export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id').unique()
    table.string('username').unique()
    table.string('first_name')
    table.string('surname')
    table.string('picture')
    table.string('location')
    table.string('email')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
