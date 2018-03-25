const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')

app.use(bodyParser.json())
app.use(cors())

app.get('/drinks', (request, response) => {
  queries
    .list('drinks')
    .then(drinks => {
      response.json({ drinks });
    });
});

app.put('/drinks/:date', (request, response) => {
  queries
    .update(request.params.date, request.body, 'drinks')
    .then(drinks => {
      response.json({drinks});
    })
    .catch(console.error);
});

app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(process.env.PORT || 3000)
