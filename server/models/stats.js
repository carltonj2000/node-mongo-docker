const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Stats",
  new mongoose.Schema({
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  })
);
