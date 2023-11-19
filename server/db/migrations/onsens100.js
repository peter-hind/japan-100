export async function up(knex) {
  return knex.schema.createTable('onsens100', (table) => {
    table.increments('id')
    table.string('name')
    table.string('prefecture')
    table.string('benefits')
    table.string('description')
    table.string('geojson')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('onsens100')
}
