import styles from "./Account.module.css";
import { useState, useContext } from "react";
import coffeeImg from "../assets/wavy.jpg";
import pattern from "../assets/icon-signup.png";
import Axios from "axios";

const Account = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [registerForm, setRegisterForm] = useState(false);
  const [error, setError] = useState("");

  function createAccount() {
    setLoginForm(false);
    setRegisterForm(true);
  }

  function loginAccount() {
    setLoginForm(true);
    setRegisterForm(false);
  }

  function loginFunction(e) {
    let erMsge = document.getElementById("error");
    let email_regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$' ;

    e.preventDefault();
    let email = document.getElementById("mail").value;

    if (!email) {
      erMsge.style.display = "block";
      setError("Email  required");
    }
    else if (!email.match(email_regex)) {
      erMsge.style.display = "block";
      setError("Enter valid email id");
    }
    else {
      let myemail = document.getElementById("mail").value;
      checkNum();
      async function checkNum() {
        try {
          const response = await Axios.post(
            "http://localhost:3001/login",
            {
              myemail,
            }
          );
          console.log(response.data);
          setError(response.data);
          if (response.data === "Please enter OTP") {
            document.getElementById("otp-block").style.display = "block";
            console.log("Enter one time password");
          }
        } catch (error) {
          setError("Request cannot be sent");
          console.log(error);
        }
      }

      erMsge.style.display = "block";
    }
  }

  function continueFunction(e) {
    e.preventDefault();
    let errorMsge = document.getElementById("registerError");
    let number = document.getElementById("num").value;
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;

    if (!number || !name || !mail) {
      errorMsge.style.display = "block";
      setError("Fill all the details");
    } else if (number.length !== 10 || name.length < 3 || !mail.includes("@")) {
      errorMsge.style.display = "block";
      setError("Check your details");
    } else {
      createAcc();
      async function createAcc() {
        try {
          const res = await Axios.post("http://localhost:3001/create-account", {
            number,
            name,
            mail,
          });
          console.log(res.data);
          if (res.data === "created") {
            document.getElementById("otpBox").style.display = "block";
            document.getElementById("sendAgain").style.display = "block";
            //  setError("Enter OTP");
          }
        } catch (err) {
          console.log(err);
        }
      }
      // errorMsge.style.display = "block";
    }
  }

  // Send OTP again
  function otpNotSent() {
    // make an api just for generating an OTP
    console.log("OTP re-generated");
  }

  // verify user Input
  async function verifyOTP(event) {
    let enteredOTP = event.target.value;
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("mail").value;
    let userPhone = document.getElementById("num").value;

    console.log(userName);
    // console.log(enteredOTP);
    if (enteredOTP.length > 5) {
      console.log(enteredOTP);
      console.log("in if ");

      try {
        const verify = await Axios.post(
          "http://localhost:3001/getUserEnteredOTP",
          {
            enteredOTP,
            userName,
            userEmail,
            userPhone
          }
        );
        console.log(verify.data);
      } catch (errors) {
        console.log(errors);
      }
    } else {
      console.log("OTP does not match");
      setError("OTP does not match");
    }
  }
  return (
    <>
      <div className={styles.board}>
        <div className={styles["image-container"]}>
          <img src={coffeeImg} alt="Image" className="wavy-image" />
        </div>
        {loginForm && (
          <>
            <div className={styles.formBox}>
              <h2>Login</h2>
              <p className={styles.formBoxp}>
                or
                <button
                  type="button"
                  onClick={createAccount}
                  className={styles.linkB}
                >
                  create an account
                </button>
              </p>
              <div className={styles.form}>
                <form method="POST">
                  <input
                    type="tel"
                    placeholder="Registered Email"
                    max={10}
                    name="mail"
                    id="mail"
                    onChange={() => {
                      setError("");
                    }}
                  />
                  <h4
                    className={styles["error-msge"]}
                    style={{ display: "none" }}
                    id="error"
                  >
                    {error}
                  </h4>
                  <input
                    style={{ display: "none" }}
                    type="tel"
                    placeholder="OTP"
                    max={5}
                    name="otp-block"
                    id="otp-block"
                    // onChange={() => {
                    //   setError("");
                    // }}
                  />
                  <button onClick={loginFunction}>Login</button>
                  <h6>By Logging In, I accept the Terms & Conditions</h6>
                </form>
              </div>
            </div>
          </>
        )}
        {registerForm && (
          <div className={styles.formBox}>
            <h2>Sign In</h2>
            <p className={styles.formBoxp}>
              or
              <button onClick={loginAccount} className={styles.linkB}>
                Log to your account
              </button>
            </p>
            <div className={styles.form}>
              <form method="POST">
                <input
                  type="tel"
                  placeholder="Phone number"
                  max={10}
                  name="number"
                  id="num"
                  onChange={() => {
                    setError("");
                  }}
                />
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={() => {
                    setError("");
                  }}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="mail"
                  onChange={() => {
                    setError("");
                  }}
                />
                <input
                  style={{ display: "none" }}
                  id="otpBox"
                  placeholder="Enter OTP Eg: (28903)"
                  maxLength={6}
                  onChange={verifyOTP}
                />
                <button
                  style={{ display: "none" }}
                  id="sendAgain"
                  onClick={otpNotSent}
                >
                  <p>OTP not received?</p>
                </button>
                <h4
                  className={styles["error-msge"]}
                  style={{ display: "none" }}
                  id="registerError"
                >
                  {error}
                </h4>
                <button onClick={continueFunction}>Continue</button>
                <h6>
                  By clicking on Continue, I accept the Terms & Conditions
                </h6>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
