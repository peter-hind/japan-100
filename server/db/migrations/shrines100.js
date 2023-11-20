export async function up(knex) {
  return knex.schema.createTable('shrines100', (table) => {
    table.increments('id')
    table.string('name')
    table.string('prefecture')
    table.string('kami')
    table.string('description')
    table.string('geojson')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('shrines100')
}
