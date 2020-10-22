// Load the Express package as a module
const express = require("express");

require('dotenv').config()


// Access the exported service
const app = express();

app.use(express.static('public'));

// require('bootstrap');
// require('jquery');

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// Load the cocktail.html file at the root URL
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/cocktails.html`);
  });

app.get("/bootstrap", (request, response) => {
  response.sendFile(`${__dirname}/test.html`);
});

app.get("/drinksAtoZ", (request, response) => {
  response.sendFile(`${__dirname}/drinksAtoZ.html`);
});
// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

