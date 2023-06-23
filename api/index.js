const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const mysql = require("mysql2");

app.use(express.json());
app.use(cors("http://localhost:3000/"));

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: "3306",
  password: "password",
  database: "coffeesy",
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Database connected");
  }
});

app.listen(port, () => {
  console.log("Server started at port:" + port);
});

app.get("/get_ingredients", (req, res) => {
  console.log("API called");
  connection.query("SELECT * FROM ingredients LIMIT 6", (err, result) => {
    if (err) {
      console.log(err);
      res.status(422).json("No ingredients found");
    } else {
      console.log(result);
      res.status(201).json(result);
    }
  });
});
