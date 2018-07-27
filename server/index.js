const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/database.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// set up environmental variable
const PORT = process.env.PORT || 3002;

// serve static files
app.use('/static', express.static(path.join(__dirname, 'dist')));

// test to see if get requests work
app.get(() => {
  console.log('Get is working!');
});

// API calls

app.get('/api/:itemId/reviews', (req, res) => {
  console.log(req.params.itemId, 'itemId');
  db.getAllReviews([req.params.itemId], (error, results) => {
    if (error) {
      console.log('Error getting the reviews: ', error);
    } else {
      console.log('getting reviews');
      res.send(results);
    }
  });
});

app.get('/api/:itemId/reviews/first', (req, res) => {
  console.log(req.params.itemId, 'itemId');
  db.getFirstReviews([req.params.itemId], (error, results) => {
    if (error) {
      console.log('Error getting the first reviews: ', error);
    } else {
      console.log('getting first reviews');
      res.send(results);
    }
  });
});

// start server
app.listen(PORT, () => { console.log(`Listening at ${PORT}!`); });
