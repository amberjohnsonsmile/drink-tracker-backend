exports.up = (knex, Promise) => {
  return knex.schema.createTable('goals', table => {
    table.increments().primary();
    table.text('goal');
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('goals');
