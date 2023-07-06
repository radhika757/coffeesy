// configuring Twilio
const twilio = require("twilio");
const accountSid = "AC537f9873e1e8dde64c5ed76dfcc2f3c3";
const authToken = "c38e387d2e42d89e8d06e56bacf3461c";
const verifySid = "VA8f7209995843f665ff944f900f6ce221"; 
const client = twilio(accountSid, authToken);
const axios = require('axios');

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const mysql = require("mysql2");
const bodyparser = require("body-parser");

app.use(express.json());
app.use(cors("http://localhost:3000/"));

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: "3306",
  password: "password",
  database: "coffeesy",
});

//Configure body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

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

app.get("/", (req, res) => {
  connection.query("SELECT * FROM ingredients", (err, result) => {
    if (err) {
      res.send("Error:", err);
    } else {
      res.send(result);
    }
  });
});

app.get("/get_ingredients", (req, res) => {
  //   console.log("API called");
  connection.query("SELECT * FROM ingredients LIMIT 6", (err, result) => {
    if (err) {
      console.log(err);
      res.status(422).json("No ingredients found");
    } else {
      // console.log(result);
      res.status(201).json(result);
    }
  });
});

app.get("/get_top_cans", (req, res) => {
  connection.query("SELECT * FROM cans LIMIT 3", (err, result) => {
    if (err) {
      res.status(422).json("No cans found");
    } else {
      // console.log(result);
      res.status(201).json(result);
    }
  });
});

// check if phone number exists

app.post("/send-number", (req, res) => {
  const phonenumber = req.body.mynum;
  connection.query(
    "SELECT * FROM users WHERE phone = ?",
    [phonenumber],
    (err, results) => {
      if (err) {
        console.log(err); 
        res.status(500).send("Internal server error");
        return;
      }
      if (!results.length > 0) {
        res.status(201).json("Number doesn't exist");
      } else {
        res.status(201).json("Please enter OTP");
        axios.post("/send-otp", phonenumber );
        // send sms
      }
    }
  );
});

// send sms
app.post("/send-otp", (req, res) => {
  const phoneNumber = req.body.phonenumber;
  console.log(phoneNumber);

  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log(otp);
  console.log(phoneNumber);
  client.messages
    .create({
      body: `Your OTP for Coffeesy is: ${otp}. Login within 5 minutes of receiving thos otp.`,
      from: "9819220635",
      to: phoneNumber,
    })
    .then((message) => {
      console.log(`OTP sent to ${phoneNumber}: ${otp}`);
      res.send({ success: true });
    })
    .catch((error) => {
      console.log(`Could'nt send OTP to ${phoneNumber}: ${otp}`);
      res.status(500).send({ success: false });
    });
});
