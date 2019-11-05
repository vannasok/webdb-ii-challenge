exports.up = function(knex) {
   return knex.schema.createTable('cars', table => {
      table.increments();

      table.string('vin', 128).unique().notNullable;
      table.string('make').notNullable;
      table.string('model').notNullable;
      table.integer('year');
      table.string('transmission');
      table.decimal('mileage').notNullable;
      table.string('title');

      table.timestamps(true, true);
   });
};

exports.down = function(knex) {
   return knex.schema.dropTableExist('cars');
};
