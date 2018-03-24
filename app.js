const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const queries = require("./queries")

app.use(bodyParser.json())
app.use(cors())

app.get("/creator-bets", (req, res) => {
  queries
    .creatorBets()
    .then(bets => {
      res.json({ bets })
    })
    .catch(console.error)
})

app.get("/creator-bets/:id", (req, res)=> {
  queries
    .creatorBetsRead(req.params.id)
    .then(bets => {
      res.json({ bets })
    })
    .catch(console.error)
})

app.get("/acceptor-bets", (req, res)=> {
  queries
    .acceptorBets()
    .then(bets => {
      res.json({ bets })
    })
    .catch(console.catch)
})

app.get("/acceptor-bets/:id", (req, res)=> {
  queries
    .acceptorBetsRead(req.params.id)
    .then(bets => {
      res.json({ bets })
    })
    .catch(console.error)
})

app.get("/users", (req, res) => {
  queries
    .list("users")
    .then(users => {
      res.json({ users })
    })
    .catch(console.error)
})

app.get("/users/:id", (req, res) => {
  queries
    .read("users", req.params.id)
    .then(user => {
      user ? res.json({ user }) : res.sendStatus(404);
    })
    .catch(console.error)
})

app.get("/bets", (req, res) => {
  queries
    .list("bets")
    .then(bets => {
      res.json({ bets })
    })
    .catch(console.error)
})

app.get("/bets/:id", (req, res) => {
  queries
    .read("bets", req.params.id)
    .then(bet => {
      bet ? res.json({ bet }) : res.sendStatus(404);
    })
    .catch(console.error)
})

app.post("/users", (req, res) => {
  queries
    .createUser(req.body)
    .then(user => {
      res.status(201).json({ user })
    })
    .catch(console.error)
})

app.post("/bets", (req, res) => {
  queries
    .createBet(req.body)
    .then(bet => {
      res.status(201).json({ bet })
    })
    .catch(console.error)
})

app.put("/bets/:id", (req, res) =>{
  queries
    .update(req.params.id, req.body, "bets")
    .then(bets => {
      res.json({ bets })
    })
    .catch(console.error)
})

app.put("/users/:id", (req, res) =>{
  queries
    .update(req.params.id, req.body, "users")
    .then(users => {
      res.json({ users })
    })
    .catch(console.error)
})

app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(process.env.PORT || 3000)
