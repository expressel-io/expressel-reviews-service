const faker = require('faker');
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

// Generate fake reviews

const sources = ['Newegg.com', 'Costco.com', 'Target.com', 'Ebay.com', 'Walmart.com'];

const generateReviews = (itemId) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(100));
  for (let i = 0; i < randomNumber; i += 1) {
    const rating = Math.floor(Math.Random() * 5);
    const title = faker.lorem.sentence();
    const date = faker.date.past();
    const text = faker.lorem.paragraphs();
    const source = sources[Math.floor(Math.Random() * 5)];
    const item = itemId;
    const query = 'INSERT INTO itemReviews (id, rating, title, date, text, source, item_id) VALUES (null, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [rating, title, date, text, source, item], (err, results) => {
      if (err) {
        console.log('error adding values in table: ', err);
      } else {
        console.log('results are: ', results);
      }
    });
  }
};

// Should match up foreign key but hard coding item ids to match
// Add generated data to the database
const generateItems = (num) => {
  for (let item = 2; item < num; item += 1) {
    connection.query('INSERT INTO items (id, name) VALUES (item, ?)', [faker.lorem.words()]);
    generateReviews(num);
  }
};

generateItems(100);

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
  getAllReviews,
  getFirstReviews,
};
