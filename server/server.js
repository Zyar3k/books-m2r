const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const config = require("./config");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.once("open", () => console.log("Wow!! You're connected to the database!"));
db.on("error", (error) => console.log("Error " + error));

app.listen(process.env.PORT || config.PORT, () => {
  console.log(`Server is running on port: ${config.PORT}`);
  console.log(`Happy coding`);
});
