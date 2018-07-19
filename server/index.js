const express = require('express');
const app = express();

const path = require('path');
// set up environmental variable
const PORT = process.env.PORT || 3002;

// serve static files
app.use('/static', express.static(path.join(__dirname, 'dist')));

// test to see if server is working
app.get(() => {
  console.log('Get is working!');
});

// start server
app.listen(PORT, () => { console.log(`Listening at ${PORT}!`); });
