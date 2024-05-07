exports.up = function (knex) {
	return knex.schema.createTable('mountains', (table) => {
		table.increments('id').primary;
		table.string('name').notNullable();
		table.float('lat').notNullable();
		table.float('lon').notNullable();
		table.string('province').notNullable();
		table.string('country').notNullable();
		table.string('img');
		table.string('description').notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('mountains');
};
