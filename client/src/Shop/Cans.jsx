import banner from "../assets/cans/banner.jpg";
import { useState, useContext } from "react";
import styles from "./Cans.module.css";
import down from "../assets/icondown.png";

const Cans = () => {
  return (
    <>
      <div className={styles.canLanding}>
        <img src={banner} alt="coffee-banner" />
        <div className={styles.overlay}>
          <h1>COLD COFFEE CANS</h1>
          <h4 style={{ margin: "0" }}>
            Enjoy thicker, bolder and creamier <br />
            Cold Coffee that's velvety smooth. <br />
            Made with real milk and coffee.
          </h4>
          <button className={styles.button}>
            <img src={down} alt="down" />
            SHOP NOW
          </button>
        </div>
      </div>
      <h3>Hi all cans</h3>
    </>
  );
};

export default Cans;
