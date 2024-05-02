exports.up = function (knex) {
	return knex.schema.createTable('mountains', (table) => {
		table.increments('id').primary; // This will create an auto-incrementing id column
		table.string('name').notNullable();
		table.float('lat').notNullable();
		table.float('lon').notNullable();
		// table.string('img');
		table.string('province').notNullable();
		table.string('country').notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('mountains');
};