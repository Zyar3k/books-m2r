const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  author: { type: Object, required: true },
  title: { type: String, required: true },
  key: { type: String, required: true },
  link: { type: String, required: true },
  page: { type: Number, required: true },
  readed: { type: Boolean, required: true },
  available: { type: Boolean, required: true },
  ama: { type: Boolean },
  bbc: { type: Boolean },
  emp: { type: Boolean },
  gan: { type: Boolean },
  pozy: { type: Boolean },
});

module.exports = mongoose.model("Book", Book);
