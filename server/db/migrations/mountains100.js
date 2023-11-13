export async function up(knex) {
  return knex.schema.createTable('mountains100', (table) => {
    table.increments('id')
    table.string('name')
    table.string('prefecture')
    table.integer('elevation_m')
    table.string('description')
    table.string('geojson')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('exampleTable')
}
