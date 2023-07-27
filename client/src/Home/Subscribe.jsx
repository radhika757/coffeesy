import styles from "./Subscribe.module.css";
import subImg from "../assets/subscribe/coffeeBoxes.jpg";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <>
      <div className={styles["subscribe-container"]}>
        <div className={styles["subscribe-img"]}>
          <img src={subImg} alt="coffee-box" />
        </div>
        <div className={styles["subscribe-content"]}>
          <h2>
            Subscribe to <br />
            your kind of coffee, on <br />
            your schedule
          </h2>
          <p>
            Get your favourite coffee delivered at your <br />
            doorstep every month - at a special price. <br /> Choose a
            convenient time, and we'll send <br />
            your fresh coffee, automatically.
          </p>
          <div className={styles.boxes}>
            <span>PICK YOUR COFFEE</span>
            <span>SELECT FREQUENCY</span>
            <span className={styles["special-box"]}>SAVE 15% EACH TIME</span>
            <span>DELIVERIES ON REPEAT</span>
          </div>
          <Link to="/subscription-coffee-plans">
            <button className={styles.startedbtn}>
              GET STARTED 
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
