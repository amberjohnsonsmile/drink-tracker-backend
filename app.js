const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');

app.use(bodyParser.json());
app.use(cors());

app.get('/all-drinks', (request, response) => {
  queries.list('drinks').then(drinks => {
    response.json({drinks});
  });
});

app.get('/drinks', (request, response) => {
  queries.listDrinks('drinks').then(drinks => {
    response.json({drinks});
  });
});

app.get('/drinks/:date', (request, response) => {
  queries
    .read(request.params.date, 'drinks')
    .then(drinks => {
      response.json({drinks});
    })
    .catch(console.error);
});

app.put('/drinks/:date', (request, response) => {
  queries
    .update(request.params.date, request.body, 'drinks')
    .then(drinks => {
      response.json({drinks});
    })
    .catch(console.error);
});

app.get('/goals', (request, response) => {
  queries.list('goals').then(goals => {
    response.json({goals});
  });
});

app.post('/goals', (request, response) => {
  queries
    .create(request.body, 'goals')
    .then(goal => {
      response.status(201).json({goal});
    })
    .catch(console.error);
});

app.delete('/goals/:id', (request, response) => {
  queries
    .delete(request.params.id, 'goals')
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.sendStatus(404);
});

app.listen(process.env.PORT || 3000);
