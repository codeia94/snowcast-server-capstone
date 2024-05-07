exports.up = function(knex) {
  return knex.schema.createTable('live_cam', function(table) {
		table.increments();
		table.integer('mountain_id').unsigned().notNullable();
		table.string('cam_url');
		table.string('title').notNullable();
		table.foreign('mountain_id').references('id').inTable('mountains');
	});
};


exports.down = function(knex) {
  return knex.schema.dropTable('live_cam');
};
