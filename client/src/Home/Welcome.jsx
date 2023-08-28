import React from "react";
import styles from "./Welcome.module.css";

export const Welcome = () => {
  return (
    <div className={styles["welcome-main-container"]}>
      <h3 className={styles["welcome-content"]}>Your Welcome Offer</h3>
      <div className={styles["welcome-box"]}>
        <div className={styles["box-left"]}>
          <span>
            <img src="" />
          </span>
          <span>Get 25% OFF on your first two coffee bags</span>
        </div>
        <div className={styles["box-right"]}>
          <span>Use Coupon: </span>
          <button>
            COFF20 <img src="" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
