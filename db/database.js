const mysql = require('mysql');

// Create and connect database
const connection = mysql.createConnection({
  user: 'root',
  password: null,
  database: 'reviews',
});

connection.connect();

const getAllReviews = (array, callback) => {
  const query = 'SELECT * FROM itemReviews WHERE item_id = ? ;';
  connection.query(query, array, (err, results) => {
    if (err) {
      console.log('Error getting all reviews in db: ', err);
    } else {
      callback(null, results);
    }
  });
};

const getFirstReviews = (array, callback) => {
  const query = 'SELECT * FROM itemReviews WHERE item_id = ? LIMIT 3;';
  connection.query(query, array, (err, results) => {
    if (err) {
      console.log('Error getting first reviews in db: ', err);
    } else {
      callback(null, results);
    }
  });
};

const getAvgReviews = (array, callback) => {
  const query = 'SELECT AVG(rating) AS average FROM itemReviews WHERE item_id = ?;';
  connection.query(query, array, (err, results) => {
    if (err) {
      console.log('Error getting avg reviews in db: ', err);
    } else {
      callback(null, results);
    }
  });
};

const getTotalReviewsPerRating = (array, callback) => {
  const query = 'SELECT COUNT(*) AS ? FROM itemReviews WHERE item_id = ? AND rating = ?;';
  connection.query(query, array, (err, results) => {
    if (err) {
      console.log('Error getting avg reviews in db: ', err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  getAllReviews,
  getFirstReviews,
  getAvgReviews,
  getTotalReviewsPerRating,
};
