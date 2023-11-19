export async function up(knex) {
  return knex.schema.createTable('blossoms100', (table) => {
    table.increments('id')
    table.string('name')
    table.string('prefecture')
    table.integer('tree_count')
    table.string('description')
    table.string('geojson')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('blossoms100')
}
