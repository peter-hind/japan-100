export async function up(knex) {
  return knex.schema.createTable('castles100', (table) => {
    table.increments('id')
    table.string('name')
    table.string('prefecture')
    table.boolean('ruin_status')
    table.string('description')
    table.string('geojson')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('castles100')
}
