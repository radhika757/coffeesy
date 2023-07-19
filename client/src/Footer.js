import { React, useEffect, useState } from "react";
import mystyles from "./Footer.module.css";
import logo from "./assets/logo-white.png";

const Footer = () => {
  return (
    <>
      <div className={mystyles["footer-box"]}>
        <div className={mystyles["footer-box-one"]}>
          {/* <img src={logo} alt="logo" />
          <div className={mystyles["footer-content"]}>
            <div>
              <h3>Home</h3>
              <h3>Flavors</h3>
              <h3>Merch</h3>
              <h3>Cans</h3>
            </div>
            <div>
              <h3>Shop</h3>
              <h3>Green Tea</h3>
              <h3>Bulk orders</h3>
              <h3>Gift someone</h3>
            </div>
          </div> */}
        </div>
        <div className={mystyles["footer-box-two"]}>
          <small>Terms</small>
          <small>Privacy</small>
        </div>
      </div>
    </>
  );
};

export default Footer;
