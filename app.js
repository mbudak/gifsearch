// Requires
const express = require('express');

// Setup
const app = express()

// Middlewares

// Routes
app.get('/', (req, res) => {
  res.send('Hello Squirrel');
});


// Start Server
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Giffy App listening on port localhost: ${3000}!`);
});