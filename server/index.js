const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/database.js');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(CORS());

// set up environmental variable
const PORT = process.env.PORT || 3002;

// serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/item/:id', express.static(path.join(__dirname, '../client/dist')));


// API calls

app.get('/api/:itemId/reviews', (req, res) => {
  console.log(req.params.itemId, 'itemId');
  db.getAllReviews([req.params.itemId], (error, results) => {
    if (error) {
      console.log('Error getting the reviews: ', error);
    } else {
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

app.get('/api/:itemId/reviews/avg', (req, res) => {
  console.log(req.params.itemId, 'itemId in avgreviews');
  db.getAvgReviews([req.params.itemId], (error, results) => {
    if (error) {
      console.log('Error getting the first reviews: ', error);
    } else {
      console.log('getting first reviews');
      res.send(results);
    }
  });
});

app.get('/api/:itemId/reviews/ratings/:i', (req, res) => {
  console.log(req.params.itemId, 'itemId in total ratings');
  db.getTotalReviewsPerRating([req.params.i, req.params.itemId, req.params.i], (error, results) => {
    if (error) {
      console.log('Error getting the rating counts: ', error);
    } else {
      console.log('getting rating counts reviews');
      res.send(results);
    }
  });
});
// start server
app.listen(PORT, () => { console.log(`Listening at ${PORT}!`); });
