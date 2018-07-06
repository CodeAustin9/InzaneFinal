// Web Scraper Homework Solution Example
// (be sure to watch the video to see
// how to operate the site in the browser)
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");

var bodyParser = require("body-parser");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Require our routes
var routes = require("./routes");
if (process.env.NODE_ENV === "production") {

app.use(express.static("/build"));
}



// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Have every request go through our route middleware
require("./routes/authentication.js")(app);
app.use(routes);
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/username";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
