// configuring Twilio
const twilio = require("twilio");
const accountSid = "AC537f9873e1e8dde64c5ed76dfcc2f3c3";
const authToken = "288597499f5677b899162968e09a60e8";
const verifySid = "VA8f7209995843f665ff944f900f6ce221";
const client = twilio(accountSid, authToken);
const axios = require("axios");

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const mysql = require("mysql2");
const bodyparser = require("body-parser");

const nodemailer = require("nodemailer");

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
        // console.log("Number exists");

        // const otp = Math.floor(100000 + Math.random() * 900000);
        // client.messages
        //   .create({
        //     body: `Your OTP for Coffeesy login is ${otp}`,
        //     from: "+919819220635",
        //     to: phonenumber,
        //   })
        //   .then((message) => {
        //     console.log(message);
        //     res.send("OTP sent");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     res.status(500).json("Error sending OTP");
        //   });
      }
    }
  );
});

// send sms
// app.post("/send-otp", (req, res) => {
//   console.log("in send-otp");
//   // make a request to /send-number
//   const response = axios.get("http://localhost:3001/send-number");
//   console.log(response);
//   // console.log()
//   const phoneNumber = req.body.phonenumber;
//   console.log(phoneNumber);

//   const otp = Math.floor(100000 + Math.random() * 900000);
//   console.log(otp);
//   console.log(phoneNumber);
//   client.messages
//     .create({
//       body: `Your OTP for Coffeesy is: ${otp}. Login within 5 minutes of receiving thos otp.`,
//       from: "9819220635",
//       to: phoneNumber,
//     })
//     .then((message) => {
//       console.log(`OTP sent to ${phoneNumber}: ${otp}`);
//       res.send({ success: true });
//     })
//     .catch((error) => {
//       console.log(`Could'nt send OTP to ${phoneNumber}: ${otp}`);
//       res.status(500).send({ success: false });
//     });
// });

// create account
app.post("/create-account", (req, res) => {
  const name = req.body.name;
  const number = req.body.number;
  const recipientEmail = req.body.mail;
  const date = new Date();
  console.log(date);
  const time = date.getMinutes();
  const otp = Math.floor(100000 + Math.random() * 900000);
  // console.log(otp);
  const uniqueID = name.substring(0, 3) + number.toString().substring(3, 7);

  // console.log(uniqueID);

  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [recipientEmail],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal server error");
        return;
      }
      if (results.length > 0) {
        res.status(201).json("Email already exists, please Login");
      } else {
        connection.query(
          "INSERT INTO unregistered (name, email,phone, date,otp) VALUES(?,?,?,?,?)",
          [name, recipientEmail, number, time, otp],
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(422).json("Couldnt create new user, Try again");
            } else {
              res.send("created");
              // process.exit();
              const subject = `Coffeesy`;
              const message = `Complete registration with the OTP - ${otp}`;

              try {
                sendEmail(recipientEmail, subject, message);

                console.log("Please check your mail");
              } catch (error) {
                console.log(err);
              }
            }
          }
        );
      }
    }
  );
});

// Send Email function
async function sendEmail(recipientEmail, subject, message) {
  const senderEmail = "raoradhika2000@gmail.com";

  // creating a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "raoradhika2000@gmail.com",
      pass: "nwreywkwdqwrixxg",
    },
  });

  const mailInfo = {
    from: senderEmail,
    to: recipientEmail,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailInfo);
    console.log("Email verification sent : ", info.messageId);

    // res.send("")
  } catch (error) {
    console.log("Error sending email", error);
  }
}

// verify otp from registration
app.post("/getUserEnteredOTP", (req, res) => {
 
  const userEnteredOTP = req.body.enteredOTP;
  const userName = req.body.userName;
  console.log(userEnteredOTP);
  console.log(userName);
  // process.exit();
  //get the otp in the db
  connection.query(
    "SELECT otp FROM unregistered WHERE name = ?",
    [userName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result[0].otp);
        if(result[0].otp === userEnteredOTP ){  
          res.status(201).json("Welcome to coffeesy");
        }else{
          res.status(422).json("Incorrect OTP");
        }
      }
    }
  );
});
