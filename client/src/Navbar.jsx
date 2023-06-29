import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart from './assets/cart.png';
import user from './assets/user.png';
import logo from './assets/Coffeesy.png';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Shop</Link>
          </li>

          <li>
            <Link to="/merch">Merch</Link>
          </li>
        </ul>
        <li className="logo">
          <Link to="/"><img src={logo} alt="logo"/></Link>
        </li>
        <ul>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/"> <img src={user} alt="user"/>  </Link>
          </li>
          <li>
            <Link to="/cart"><img src={cart} alt="cart" /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
