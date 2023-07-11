const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let transactions = require("../models/transactions.model");

router.get("/", (req, res) => {
  res.status(200).json(transactions);
});

router.get("/get-transaction-by-id/:id", (req, res) => {
  const { id } = req.params;
  const transaction = transactions.find((item) => item.id === id);
  if (!transaction) {
    res.status(404).json({ status: false, message: "Transaction not found" });
  } else {
    res.status(200).json({ status: true, data: transaction });
  }
});

router.post("/create-transaction", (req, res) => {
  const { name, amount, date, from, category } = req.body;

  if (!name || !amount || !date || !from || !category) {
    res.status(400).json({
      status: false,
      message: "You cannot create an empty transaction.",
    });
  } else {
    const newTransaction = {
      id: uuidv4(),
      name,
      amount,
      date,
      from,
      category,
    };
    transactions.unshift(newTransaction);
    res.status(200).json({ status: true, data: newTransaction });
  }
});

router.put("/update-transaction-by-id/:id", (req, res) => {
  const id = req.params.id;

  const foundIndex = transactions.findIndex((item) => item.id === id);

  if (foundIndex === -1) {
    res.status(404).json({ status: false, message: "Id not found!" });
  } else {
    let foundTransaction = transactions[foundIndex];

    let updatedTransaction = {
      ...foundTransaction,
      ...req.body,
    };
    transactions[foundIndex] = updatedTransaction;
    res.status(200).json({ message: "success", status: true, data: foundTransaction });
  }
});

router.delete("/delete-transaction-by-id/:id", (req, res) => {
  const { id } = req.params;

  let foundIndex = transactions.findIndex((item) => item.id === id);

  if (foundIndex === -1) {
    res
      .status(404)
      .json({ status: false, message: "Sorry, no transaction with this ID found" });
  } else {
    let foundTransaction = transactions[foundIndex];

    let newTransactions = transactions.filter((item) => item.id !== req.params.id);

    transactions = newTransactions;

    res.status(200).json({
      status: true,
      message: "success",
      data: foundTransaction,
    });
  }
});

module.exports = router;