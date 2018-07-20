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
//   const rating = 4.7;
// }

// Generate fake reviews

const sources = ['Newegg.com', 'Costco.com', 'Target.com', 'Ebay.com', 'Walmart.com'];

const generateReviews = () => {
  for (let i = 0; i < 1000; i += 1) {
    const rating = Math.floor(Math.Random() * 5);
    const title = faker.lorem.sentence();
    const date = faker.date.past();
    const text = faker.lorem.paragraphs();
    const source = sources[Math.floor(Math.Random() * 5)];
    const query = 'INSERT INTO itemReviews (id, rating, title, date, text, source) VALUES (null, ? ? ? ? ?)';
    connection.query(query, [rating, title, date, text, source], (err, results) => {
      if (err) {
        console.log('error adding values in table: ', err);
      } else {
        console.log('results are: ', results);
      }
    });
  }
};

// Add generated data to the database
generateReviews();
