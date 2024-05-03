exports.up = function(knex) {
  return knex.schema.createTable('trail_map', function(table) {
    table.increments();
    table.integer('mountain_id').unsigned().notNullable();
    table.string('trailmap').notNullable();

    // Define a foreign key constraint
    table.foreign('mountain_id').references('id').inTable('mountains');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('trail_map');
};