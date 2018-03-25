const database = require('./database-connection');

module.exports = {
  list(table) {
    return database(table)
      .where('drinks', '>', 0)
      .orderBy('id', 'asc');
  },
  update(date, drinks, table) {
    return database(table)
      .update(drinks)
      .where('date', date)
      .returning('*')
      .then(record => record[0]);
  }
};
