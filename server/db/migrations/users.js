export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('sub')
    table.string('given_name')
    table.string('family_name')
    table.string('nickname')
    table.string('name')
    table.string('picture')
    table.string('locale')
    table.string('updated_at')
    table.string('email')
    table.boolean('email_verified')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('exampleTable')
}
