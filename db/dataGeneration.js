const faker = require('faker');
const connection = require('./database');

// Generate fake reviews

// const macbookReviewOne = {
//   id: 1,
//   rating: 4,
//   title: 'A fantastic update let down by a poor keyboard and lack of ports',
//   date: 'April 15, 2018',
//   text: '',
//   source: '',
//   itemId: 1,
// };

// const macbookReviewTwo = {
//   id: 2,
//   rating: 4,
//   title: '',
//   date: 'April 15, 2018',
//   text: '',
//   source: '',
//   itemId: 1,
// };

// const macbookReviewThree = {
//   id: 3,
//   rating: 4,
//   title: '',
//   date: 'April 15, 2018',
//   text: '',
//   source: '',
//   itemId: 1,
// };

// const generateMacbook = () => {
//   connection.query('INSERT INTO items (id, name) VALUES (item, 1);');
// };

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
    generateReviews(item);
  }
};

// generateMacbook();
generateItems(100);
