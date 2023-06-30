import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutNavbar.css";
import cart from "./assets/cart.png";
import user from "./assets/user.png";
import logo from "./assets/Coffeesy.png";

const CheckoutNavbar = () => {
  return (
    <>
      <nav>
        <li className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        {/* <ul className="checkout">
          <li>
            <p> SECURE CHECKOUT</p>
          </li>
        </ul> */}
        <ul>
          <li></li>
          <li>
            <Link to="/">
              <img src={user} alt="user" />
            </Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CheckoutNavbar;
