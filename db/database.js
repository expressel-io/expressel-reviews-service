const mysql = require('mysql');

// Create and connect database
const connection = mysql.createConnection({
  user: 'root',
  password: null,
  database: 'reviews',
});

connection.connect();

// Add Macbook Pro info as first item
// const addMacbook = () => {

// }

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

module.exports = {
  connection,
  getAllReviews,
  getFirstReviews,
};
