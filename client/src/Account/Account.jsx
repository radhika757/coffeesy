import styles from "./Account.module.css";

const Account = () => {
  return (
    <>
      <div className={styles.board}>
        <div className={styles.image}>Image</div>
        <div className={styles.formBox}>
          <h2>Login</h2>
          <p>or create an account</p>
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
      </div>
    </>
  );
};

export default Account;
