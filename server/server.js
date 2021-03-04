const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const bookRoutes = require("./routes/book.routes");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", bookRoutes);

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.once("open", () => console.log("Wow!! You're connected to the database!"));
db.on("error", (error) => console.log("Error " + error));

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port: 8000`);
  console.log(`Happy coding`);
});
