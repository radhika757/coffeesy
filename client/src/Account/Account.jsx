import styles from "./Account.module.css";
import { useState, useEffect } from "react";
import coffeeImg from "../assets/wavy.jpg";
import pattern from "../assets/icon-signup.png";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../state/authState";
import { logout } from "../state/authState";
import { registered } from "../state/authState";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  // console.log(authStatus);

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
    let email_regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

    e.preventDefault();
    let email = document.getElementById("mail").value;

    if (!email) {
      erMsge.style.display = "block";
      setError("Email  required");
    } else if (!email.match(email_regex)) {
      erMsge.style.display = "block";
      setError("Enter valid email id");
    } else {
      let myemail = document.getElementById("mail").value;
      checkNum();
      async function checkNum() {
        try {
          const response = await Axios.post("http://localhost:3001/login", {
            myemail,
          });
          console.log(response.data);
          setError(response.data);
          if (response.data === "Please enter OTP") {
            document.getElementById("otp_block").style.display = "block";
            document.getElementById("loginbtn").style.display = "none";
            document.getElementById("sendOtpLog").style.display = "block";
            // console.log("Enter one time password");
          }
        } catch (error) {
          setError("Request cannot be sent");
          console.log(error);
        }
      }
      erMsge.style.display = "block";
    }
  }

  // after log in
  function sendOtp(event) {
    // console.log("send");
    event.preventDefault();
    let myOtp = document.getElementById("otp_block").value;
    let userMail = document.getElementById("mail").value;
    console.log(myOtp);
    verifyOTP();
    async function verifyOTP() {
      try {
        const response = await Axios.post("http://localhost:3001/verify-otp", {
          myOtp,
          userMail,
        });

        const { token, userdata } = response.data;
        console.log(token);
        console.log(userdata);

        document.cookie = `jwt=${token}; path='/'; HttpOnly`;
        document.cookie = `userData=${JSON.stringify(
          userdata
        )}; path='/'; HttpOnly`;
        if (response) {
          dispatch(login);
          navigate('/');
        }
        // authStatus(true);
        
      } catch (errors) {
        setError(errors);
        console.log("Error verifying OTP: " + errors);
      }
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
            document.getElementById("continue").style.display = "none";
            document.getElementById("submit").style.display = "block";
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  // Send OTP again
  function otpNotSent() {
    console.log("OTP re-generated");
  }

  // verify user Input
  const verifyOTP = async (event) => {
    event.preventDefault();
    let enteredOTP = document.getElementById("otpBox").value;
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("mail").value;
    let userPhone = document.getElementById("num").value;

    if (enteredOTP.length > 5) {
      try {
        const response = await Axios.post(
          "http://localhost:3001/getUserEnteredOTP",
          {
            enteredOTP,
            userName,
            userEmail,
            userPhone,
          }
        );
        console.log(response.data.success); //true => isAuthenticated(true)
        if (response.data.success === true) {
          dispatch(registered());
          navigate("/Welcome");
        }
      } catch (error) {
        console.log(error);
        setError("Error occurred during API call.");
      }
    } else if (enteredOTP === "") {
      setError("Enter OTP");
    } else {
      setError("OTP does not match");
    }
  };
  return (
    <>
      {authStatus ? (
        <>
          <p>Welcome user!</p>
        </>
      ) : (
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
                      name="otp_block"
                      id="otp_block"
                    />
                    <button onClick={loginFunction} id="loginbtn">
                      Login
                    </button>
                    <button
                      onClick={sendOtp}
                      style={{ display: "none" }}
                      id="sendOtpLog"
                    >
                      Send
                    </button>
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
                    // onChange={verifyOTP}
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
                  <button id="continue" onClick={continueFunction}>
                    Continue
                  </button>
                  <button
                    id="submit"
                    style={{ display: "none" }}
                    onClick={verifyOTP}
                  >
                    Submit
                  </button>
                  <h6>
                    By clicking on Continue, I accept the Terms & Conditions
                  </h6>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Account;
