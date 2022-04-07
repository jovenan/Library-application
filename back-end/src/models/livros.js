const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("Livros", schema);