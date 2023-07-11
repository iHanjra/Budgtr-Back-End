const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const transactionsController = require("./controllers/transactions.controller.js");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/transactions", transactionsController);

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Sorry, no page found!" });
});

module.exports = app;
