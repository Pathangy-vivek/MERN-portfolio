const mongoose = require("mongoose");
const { connected } = require("process");

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error connecting to databae");
});

connection.on("connected", () => {
  console.log("Connected to database");
});

module.exports = connection;
