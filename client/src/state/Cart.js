// All states for cart component
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const items = useSelector((state) => state.cart.value);
  // console.log(items);

  const [setLogin, getSetLogin] = useState();
  const [SignUp, setSignUp] = useState(false);

  function haveAnAcc() {
    document.getElementById("signin").style.display = "none";
    document.getElementById("btns").style.display = "none";
    let btn = document.getElementById("login");
    btn.style.display = "block";
  }

  function createAnAccount() {
    document.getElementById("btns").style.display = "none";
    let btn = document.getElementById("login");
    btn.style.display = "none";
    document.getElementById("signin").style.display = "block";
  }
  

  useEffect(() => {
    console.log(SignUp);
  }, [SignUp]);
  return (
    <>
      <div className={styles["main-container-box"]}>
        <div className={styles["account-details"]}>
          <div className={styles.account}>
            <h2>Account</h2>
            <p>
              To place your order now, log in to your exisiting account or sign
              up.
            </p>
          </div>
          <div className={styles.conditonal} id="btns">
            <button className={styles.conditonalbtn1} onClick={haveAnAcc}>
              <div>Have an account?</div>
              <b>LOG IN</b>
            </button>
            <button className={styles.conditonalbtn2} onClick={createAnAccount}>
              <div>New to Coffeesy?</div> <b>SIGN UP</b>
            </button>
          </div>

          <div style={{ display: "none" }} id="login">
            <form method="POST">
              <div className={styles.loginBox}>
                <div className={styles.loginBox1}>Enter login details or </div>

                <a className={styles.loginBox2} onClick={createAnAccount}>
                  create an account
                </a>
              </div>
              <div className={styles.form}>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Phone number"
                  maxLength="10"
                  autoComplete="off"
                />
                <button>Login</button>
                <h6>By clicking on Login, I accept the Terms & Conditions</h6>
              </div>
            </form>
          </div>

          <div style={{ display: "none" }} id="signin">
            <form method="POST">
              <div className={styles.loginBox}>
                <div className={styles.loginBox1}>Sign up or </div>

                <a className={styles.loginBox2} onClick={haveAnAcc}>
                  log in to your account
                </a>
              </div>
              <div className={styles.secondForm}>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Phone number"
                  maxLength="10"
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                />
                <button>Continue</button>
                <h6>By clicking on Continue, I accept the Terms & Conditions</h6>
              </div>
            </form>
          </div>
        </div>
        <div className={styles["order-details"]}>
          <h3>Hello</h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
