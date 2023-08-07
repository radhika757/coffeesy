import { React, useEffect, useState } from "react";
import mystyles from "./Footer.module.css";
import logo from "./assets/coffe.png";
import square from "./assets/square.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className={mystyles["footer-main-box"]}>
        <div className={mystyles["footer-container"]}>
          <div className={mystyles.logo}>
            <span>
              <img src={logo} />
            </span>
            <span>
              <h2>Coffeesy</h2>
            </span>
          </div>
         <div className={mystyles.newsletter}>
          <input type='text' placeholder="Subscribe to our Newsletter"/>
          <button type="submit" disabled>Submit</button>
         </div>
        </div>
        <span className={mystyles.border}></span>
      </div>
    </>
  );
};

export default Footer;
