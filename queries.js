const database = require("./database-connection")

module.exports = {
  list(table){
    return database(table)
  },
  read(table, id) {
    return database(table)
      .where("id", id)
      .first()
  },
  creatorBets(){
    return database("bets")
      .join("users", "users.id", "=", "bets.creator")
      .select(
        "users.name",
        "bets.id",
        "bets.description",
        "bets.amount",
        "bets.accepted",
        "bets.resolved",
        "bets.winner",
        "bets.date",
        "bets.comment"
      )
  },
  creatorBetsRead(id){
    return database("bets")
      .join("users", "users.id", "=", "bets.creator")
      .select(
        "users.name",
        "bets.id",
        "bets.description",
        "bets.amount",
        "bets.accepted",
        "bets.resolved",
        "bets.winner",
        "bets.date",
        "bets.comment"
      )
      .where("users.id", id)
      .returning("*")
  },
  acceptorBets(){
    return database("bets")
      .join("users", "users.id", "=", "bets.acceptor")
      .select(
        "users.name",
        "bets.id",
        "bets.description",
        "bets.amount",
        "bets.accepted",
        "bets.resolved",
        "bets.winner",
        "bets.date",
        "bets.comment"
      )
  },
  acceptorBetsRead(id){
    return database("bets")
      .join("users", "users.id", "=", "bets.acceptor")
      .select(
        "users.name",
        "bets.id",
        "bets.description",
        "bets.amount",
        "bets.accepted",
        "bets.resolved",
        "bets.winner",
        "bets.date",
        "bets.comment"
      )
      .where("users.id", id)
      .returning("*")
  },
  createUser(user){
    return database("users")
      .insert(user)
      .returning("*")
      .then(record => record[0])
  },
  createBet(bet){
    return database("bets")
      .insert(bet)
      .returning("*")
      .then(record => record[0])
  },
  update(id, item, table){
    return database(table)
      .update(item)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  }
}
