console.log("Running");

// Require filesystem builtin node module
const fs = require('fs');




// Get the express library
const express = require('express');

// Load express server api onto the constant "app"
const app = express();

// Create a template engine
const header = fs.readFileSync('./views/header.bullet').toString();
const footer = fs.readFileSync('./views/footer.bullet').toString();
app.engine('bullet', (filepath, options, callback) => {
  fs.readFile(filepath, (error, content) => {
    return callback(null, content.toString()
      .replace(/#HEADER#/g, header)
      .replace(/#FOOTER#/g, footer));
  });
});

// Set express view (where templates live) directory to ./views
app.set('views', './views');
app.set('view engine', 'bullet');

// Apply static file serving middleware
app.use(express.static('static'));

// When a GET request is made to server asking for route '/', send the response 'hey'
app.get('/', (request, response) => {
  response.render('index', {});
});

app.get('/photos', (request, response) => {
  response.render('photos', {});
});

app.get('/recipes', (request, response) => {
  response.render('recipes', {});
});

app.get('/chromeAbb', (request, response) => {
  response.render('chromeAbb', {});
});

app.get('/favCovers', (request, response) => {
  response.render('favCovers', {});
});

app.get('/memorialCubes', (request, response) => {
  response.render('memorialCubes', {});
});

app.get('/tearableCloth', (request, response) => {
  response.render('tearableCloth', {});
});

// Start server, listening for requests on port 5000
app.listen(5000, () => {
  console.log('App running on port 5000!');
});
