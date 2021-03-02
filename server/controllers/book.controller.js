const Book = require("../models/book.model");

exports.getAllBooks = async (req, res) => {
  try {
    res.status(200).json(await Book.find());
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getBook = async (req, res) => {
  try {
    res.status(200).json(await Book.find({ _id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};
