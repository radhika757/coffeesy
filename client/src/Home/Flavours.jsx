import React from "react";
import flavours from "../assets/flavours/Flavors.png";
import "./Flavours.css";

export default function Flavours() {
  return (
    <>
      <div className="container-main">
        <div>
          <h2>FLAVOURS</h2>
        </div>
        <div className="container-cans">
          <div className="cans">
            {/* <img src={flavours} alt="flavour1"/> */}
          </div>
          <div className="cans">
            {/* <img src={flavours} alt="flavour1"/> */}
          </div>
          <div className="cans">
            {/* <img src={flavours} alt="flavour1"/> */}
          </div>
        </div>
        <button>SHOP ALL </button>
      </div>
    </>
  );
}
