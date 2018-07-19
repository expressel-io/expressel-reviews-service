const faker = require('faker');
const mysql = require('mysql');

// Create and connect database

dbConnection = mysql.createConnection({
  user: 'root',
  password: null,
  database: 'reviews',
});

dbConnection.connect();

// Generate fake reviews

const sources = ['Newegg.com', 'Costco.com', 'Target.com', 'Ebay.com', 'Walmart.com'];

const generateReviews = () => { 
  for (let i = 0; i < 1000; i += 1) {
    const rating = Math.floor(Math.Random() * 5);
    const title = faker.lorem.sentence();
    const date = faker.date.past();
    const text = faker.lorem.paragraphs();
    const source = sources[Math.floor(Math.Random() * 5)];
    const query = 'INSERT INTO itemReviews (rating, title, date, text, source) VALUES (? ? ? ? ?)';
    dbConnection.query(query, [rating, title, date, text, source]);
  }
};

// Add generated data to the database

generateReviews();
