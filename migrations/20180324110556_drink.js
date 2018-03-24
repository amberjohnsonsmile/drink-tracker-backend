exports.up = function(knex, Promise) {
  return knex.schema.createTable('drinks', table => {
    table.increments().primary();
    table.date('date');
    table.text('dateString')
    table.integer('drinks');
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('drinks');
