const database = require('./database-connection')

module.exports = {
  list(table){
    return database(table)
    .where('drinks', '>', 0);
  }
}
