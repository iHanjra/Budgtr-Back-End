// DEPENDENCIES
const express = require("express");
//morgan is middleware that displays the requests log in terminal
//needs to be installed
const morgan = require("morgan");
const cors = require("cors");

// CONFIGURATION
//Teaches app to read incoming json data
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

//.use is app level middleware
app.use("*", (req, res) => {
  res.status(404).json({ message: "Sorry, no page found!" });
});

// EXPORT
module.exports = app;
