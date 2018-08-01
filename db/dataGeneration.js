const faker = require('faker');
const connection = require('./database');

// Generate fake reviews

const sources = ['Newegg.com', 'Costco.com', 'Target.com', 'Ebay.com', 'Walmart.com'];

const generateReviews = (itemId) => {
  const randomNumber = Math.ceil(Math.random() * Math.floor(100));
  for (let i = 0; i < randomNumber; i += 1) {
    const rating = Math.ceil(Math.random() * 5);
    const title = faker.lorem.sentence();
    const date = faker.date.past();
    const text = faker.lorem.paragraphs();
    const source = sources[Math.floor(Math.random() * 5)];
    const item = itemId;
    const query = 'INSERT INTO itemReviews (rating, title, date, text, source, item_id) VALUES (?, ?, ?, ?, ?, ?)';
    connection.connection.query(query, [rating, title, date, text, source, item], (err, results) => {
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
  for (let item = 1; item < num; item += 1) {
    connection.connection.query(`INSERT INTO items (id, name) VALUES (${item}, ?)`, [faker.lorem.words()]);
    generateReviews(item);
  }
};

generateItems(100);
