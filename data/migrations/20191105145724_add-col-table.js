exports.up = function(knex) {
   return knex.schema.table('cars', table => {
      table.string('color', 64);
      table.integer('year');
   });
};

exports.down = function(knex) {
   return knex.schema.table('cars', table => {
      table.dropColumn('color');
      table.dropColumn('year');
   });
};
