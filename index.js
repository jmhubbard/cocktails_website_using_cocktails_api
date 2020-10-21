// Load the Express package as a module
const express = require("express");

const test = require("./public/js/test");

// Access the exported service
const app = express();

app.use(express.static('public'));

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.send("Hello from Express1!");
});

  app.get("/cocktails", (request, response) => {
    response.sendFile(`${__dirname}/cocktails.html`);
    });

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

