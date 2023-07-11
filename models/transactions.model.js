const { v4: uuidV4 } = require("uuid");

module.exports = [
  {
    id: uuidV4(),
    name: "Income",
    amount: 1000,
    date: new Date("04/01/2023"),
    from: "Employer",
    category: "Income",
  },
  {
    id: uuidV4(),
    name: "Taxes",
    amount: -300,
    date: new Date("04/01/2023"),
    from: "H&R Block",
    category: "Taxes",
  },
  {
    id: uuidV4(),
    name: "Retirement",
    amount: -200,
    date: new Date("04/01/2023"),
    from: "Prudential",
    category: "Retirement",
  },
  {
    id: uuidV4(),
    name: "Savings",
    amount: -100,
    date: new Date("04/01/2023"),
    from: "TD Bank",
    category: "Savings",
  },
  {
    id: uuidV4(),
    name: "Credit Card Payment",
    amount: -100,
    date: new Date("04/01/2023"),
    from: "TD Bank",
    category: "Bills",
  },
  {
    id: uuidV4(),
    name: "Birthday Money",
    amount: 20,
    date: new Date("04/05/2023"),
    from: "Aunt Tilda",
    category: "Gift",
  },
  {
    id: uuidV4(),
    name: "Coffee",
    amount: -4,
    date: new Date("04/05/2023"),
    from: "Starbucks",
    category: "Food",
  },
  {
    id: uuidV4(),
    name: "Internet",
    amount: -100,
    date: new Date("04/05/2023"),
    from: "Verizon",
    category: "Bills",
  },
  {
    id: uuidV4(),
    name: "Groceries",
    amount: -76,
    date: new Date("04/03/2023"),
    from: "Whole Foods",
    category: "Food",
  },
  {
    id: uuidV4(),
    name: "Pet Food",
    amount: -7,
    date: new Date("04/03/2023"),
    from: "Amazon",
    category: "Pets",
  },
];
