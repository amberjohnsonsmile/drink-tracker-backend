const database = require('./database-connection');

module.exports = {
  list(table) {
    return database(table);
  },
  listDrinks(table) {
    return database(table)
      .where('drinks', '>', 0)
      .orderBy('id', 'asc');
  },
  read(date, table) {
    return database(table)
      .where('date', date)
      .first();
  },
  update(date, drinks, table) {
    return database(table)
      .update(drinks)
      .where('date', date)
      .returning('*')
      .then(record => record[0]);
  },
  create(goal, table) {
    return database(table)
      .insert(goal)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id, table) {
    return database(table)
      .where('id', id)
      .del();
  }
};
