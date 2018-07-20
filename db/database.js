const faker = require('faker');
const mysql = require('mysql');

// Create and connect database
const connection = mysql.createConnection({
  user: 'root',
  password: null,
  database: 'reviews',
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS reviews;', (error) => {
  if (error) {
    throw error;
  }
});

connection.query('USE reviews;', (error) => {
  if (error) {
    throw error;
  }
});

connection.query(`CREATE TABLE IF NOT EXISTS itemReviews (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  text VARCHAR(2000),
  source VARCHAR(40) NOT NULL,
  item_id INT NOT NULL,
  PRIMARY KEY (id)
  );`, (error) => {
  if (error) {
    throw error;
  }
});
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
    const query = 'INSERT INTO itemReviews (id, rating, title, date, text, source, item_id) VALUES (null, ? ? ? ? ? ?)';
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
for (let item = 1; item < 100; item += 1) {
  connection.query('INSERT INTO items (id, name) VALUES (item, ?)', [faker.lorem.words()]);
  generateReviews(item);
}
