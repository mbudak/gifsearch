// Requires
const express = require('express');
const { engine } = require('express-handlebars');


// Setup
const app = express()

// Middlewares
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


// Routes
app.get('/', (req, res) => {
  console.log(req.query);
  
  res.render('home')
})

app.get('/', (req, res) => {
  // set the url of the gif
  const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
  // render the hello-gif view, passing the gifUrl into the view to be displayed
  res.render('hello-gif', { gifUrl })
})

app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name });
})

// Start Server
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Giffy App listening on port localhost: ${3000}!`);
});