import React from "react";
import add from "../assets/add.png";
import "./Flavours.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../state/CartState";

export default function Flavours() {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.cart.value); // access the redux store state
 // console.log(itemList);
  const [getCans, setCans] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/get_top_cans")
      .then((response) => {
        setCans(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container-main">
        <div>
          <h2>FLAVOURS</h2>
        </div>
        <div className="container-cans">
          {getCans.map((data) => (
            <div className="cans" key={data.id}>
              <img src={require(`../assets/cans/${data.can_img}`)} alt="can1" />
              <div className="cans-box">
                <div className="cans-details">
                  <h4>{data.name}</h4>
                  <button
                    onClick={() => {
                      dispatch(
                        addItem({
                          id: data.id + 1,
                          name: data.name,
                          price: data.can_price,
                          quantity:1,
                          // total: {totalamount},
                          img: data.can_img,
                        })
                      );
                    }}
                  >
                    <img src={add} />
                  </button>
                </div>
                <p>
                  <span>&#8377;</span>
                  {data.can_price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="to-all-cans">
          <Link to="/coffee-cans">SHOP ALL</Link>
        </button>
        {/* {itemList} */}
      </div>
    </>
  );
}
