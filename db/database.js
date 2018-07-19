const faker = require('faker');
const mysql = require('mysql');

// Create and connect database

dbConnection = mysql.createConnection({
  user: 'root',
  password: null,
  database: 'reviews'
});

dbConnection.connect();

// Generate fake reviews

const sources = ['Newegg.com', 'Costco.com', 'Target.com', 'Ebay.com', 'Walmart.com'];

const generateReviews = () => { 
  {
    rating: Math.floor( Math.Random() * 5 ),
    title: faker.lorem.sentence(),
    date: faker.date.past(),
    text: faker.lorem.paragraphs(),
    source: sources[Math.floor(Math.Random() * 5)]    
  }
} 

const addReviews = () => {
  for (let i = 0; i < 100; i += 1) {
    let query = 'INTERT INTO itemReviews (rating, title, date, text, source) VALUES (? ? ? ? ?)';
    
    generateReviews()
  }
  
}

//Add generated data to the database\\
