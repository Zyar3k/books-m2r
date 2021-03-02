const express = require("express");
const router = express.Router();

const BookController = require("../controllers/book.controller");

router.route("/books").get(BookController.getAllBooks);

router.route("/book/:id").get(BookController.getBook);

// router.route("/books").post(BookController.addBook);

// router.route("/book/:id").delete(BookController.deleteBook);

// router.route("/book/:id").patch(BookController.updateBook);

module.exports = router;
