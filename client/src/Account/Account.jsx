import styles from "./Account.module.css";
import { useState } from "react";

const Account = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [registerForm, setRegisterForm] = useState(false);

  function createAccount() {
    setLoginForm(false);
    setRegisterForm(true);
  }

  function loginAccount() {
    setLoginForm(true);
    setRegisterForm(false);
  }
  return (
    <>
      <div className={styles.board}>
        <div className={styles.image}>Image</div>
        {loginForm && (
          <div className={styles.formBox}>
            <h2>Login</h2>
            <p>
              or <button onClick={createAccount} className={styles.linkB}>create an account</button>
            </p>
            <div className={styles.form}>
              <form>
                <input
                  type="tel"
                  placeholder="Phone number"
                  max={10}
                  name="number"
                />
                <button>Login</button>
              </form>
            </div>
          </div>
        )}
        {registerForm && (
          <div className={styles.formBox}>
            <h2>Sign In</h2>
            <p>
              or <button onClick={loginAccount} className={styles.linkB}>Login</button>
            </p>
            <div className={styles.form}>
              <form>
                <input
                  type="tel"
                  placeholder="Phone number"
                  max={10}
                  name="number"
                />
                <input type="text" placeholder="Name" name="name" />
                <input type="text" placeholder="Email" name="email" />
                <button>SignUp</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
