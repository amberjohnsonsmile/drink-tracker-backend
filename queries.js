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
  listMonth(month, table) {
    switch (month) {
      case 'january':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2019-01-01', '2019-01-31']);
        break;
      case 'february':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-02-01', '2018-02-28']);
        break;
      case 'march':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-03-01', '2018-03-31']);
        break;
      case 'april':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-04-01', '2018-04-30']);
        break;
      case 'may':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-05-01', '2018-05-31']);
        break;
      case 'june':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-06-01', '2018-06-30']);
        break;
      case 'july':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-07-01', '2018-07-31']);
        break;
      case 'august':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-08-01', '2018-08-31']);
        break;
      case 'september':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-09-01', '2018-09-30']);
        break;
      case 'october':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-10-01', '2018-10-31']);
        break;
      case 'november':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-11-01', '2018-11-30']);
        break;
      case 'december':
        return database(table)  
          .where('drinks', '>', 0)
          .whereBetween('date', ['2018-12-01', '2018-12-31']);
        break;
    }
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
