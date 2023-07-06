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
    e.preventDefault();
    let num = document.getElementById("number").value;

    if (!num) {
      erMsge.style.display = "block";
      setError("Number required");
    } else if (num.length !== 10) {
      erMsge.style.display = "block";
      setError("Enter a valid 11-digit number");
    } else {
      let mynum = document.getElementById("number").value;
      checkNum();
      async function checkNum() {
        try {
          const response = await Axios.post(
            "http://localhost:3001/send-number",
            {
              mynum,
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
      errorMsge.style.display = "block";
      setError("Thanks");
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
                    placeholder="Phone number"
                    max={10}
                    name="number"
                    id="number"
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
                   style={{display:'none'}}
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
