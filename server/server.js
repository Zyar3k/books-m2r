const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const DB_MONGO = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-y9wgt.mongodb.net/DBBooks`;
const PORT = process.env.PORT || 8000;

const bookRoutes = require("./routes/book.routes");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", bookRoutes);

app.get("/", (req, res) => {
  res.send("Hello, m2r API");
});

mongoose.connect(DB_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.once("open", () => console.log("Wow!! You're connected to the database!"));
db.on("error", (error) => console.log("Error " + error));

app.listen(PORT, () => {
  console.log(`Server is running on port: 8000`);
  console.log(`Happy coding`);
});
