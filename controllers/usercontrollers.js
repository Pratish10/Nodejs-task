const User = require("../models/userModel");

const getAllData = async (req, res) => {
  try {
    const data = await User.find();
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

// Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
const incomeCar = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        {
          income: { $lt: "$5" },
        },
        {
          $or: [{ car: ["BMW", "Mercedes-Benz"] }],
        },
      ],
    });
    res.json(users);
  } catch (err) {
    console.log(error);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

// Male Users which have phone price greater than 10,000.
const phonePrice = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        {
          gender: "Male",
        },
        {
          phone_price: { $gt: 10000 },
        },
      ],
    });
    res.json(users);
  } catch (err) {
    console.log(error);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

// Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
const quote = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        {
          last_name: { $regex: /^M[a-z]*$/i },
        },
        {
          quote: { $regex: /^.{16,}$/ },
        },
        {
          email: { $regex: /m/i },
        },
      ],
    });
    res.json(users);
  } catch (err) {
    console.log(error);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

// Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
const carEmail = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        {
          $or: [{ car: "BMW" }, { car: "Mercedes-Benz" }, { car: "Audi" }],
        },
        {
          email: { $not: /\d/ },
        },
      ],
    });
    res.json(users);
  } catch (err) {
    console.log(error);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

// Show the data of top 10 cities which have the highest number of users and their average income.
const top10Cities = async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          avgIncome: { $avg: { $toDouble: { $substr: ["$income", 1, -1] } } },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    res.json(users);
  } catch (err) {
    console.log(error);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

module.exports = {
  getAllData,
  incomeCar,
  phonePrice,
  quote,
  carEmail,
  top10Cities,
};
