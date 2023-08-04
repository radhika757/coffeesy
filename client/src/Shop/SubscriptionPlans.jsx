import React, { useState, useEffect } from "react";
import styles from "./SubscriptionPlans.module.css";
import left from "../assets/subscribe/left.png";
import right from "../assets/subscribe/right.png";
import axios from "axios";
import coffeeb from "../assets/subscribe/cbrew.jpg";
import coffeecans from "../assets/subscribe/coffeecans.jpg";
import instant from "../assets/subscribe/instant.jpg";

function SubscriptionPlans() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedState, setSelectedSate] = useState(false);
  const [getSubscriptionDetails, setSubscriptionDetails] = useState([]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };
  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/get-subscritpion-packages")
      .then((response) => {
        // console.log(response.data);
        setSubscriptionDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function sendSelectedCoffee() {
    // console.log(id);
  }

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return (
          <>
            <div className={styles["main-container-box"]}>
              <div className={styles["slide-box"]}>
                <div className={styles["slide-box-headers"]}>
                  <button onClick={handlePreviousSlide} disabled>
                    <img src={left} style={{ margin: "5px" }} />
                    <span> Choose a Coffee</span>
                  </button>
                </div>
                <div className={styles.title}>
                  <h2>Choose a Coffee</h2>
                </div>
                <div className={styles.right}>
                  <button onClick={handleNextSlide}>
                    <span>Pick a Flavour</span>
                    <img src={right} style={{ margin: "5px" }} />
                  </button>
                </div>
              </div>
              <div className={styles["options-grid"]}>
                {getSubscriptionDetails.map((data) => (
                  <div
                    key={data.id}
                    className={styles["grid-item-box"]}
                   
                  >
                    {/* <button  onClick={sendSelectedCoffee()}> */}
                      <div className={styles["grid-image"]}>
                        <img
                          src={require(`../assets/subscribe/${data.image}`)}
                          alt="imgs"
                        />
                      </div>
                      <div className={styles.content}>
                        <h4>{data.name}</h4>
                        <h4>Starting from &#8377;250</h4>
                      </div>
                      <div className={styles.descrip}>{data.description}</div>
                    {/* </button> */}
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles["slide-box-headers"]}>
              <button onClick={handlePreviousSlide}>Choose a Coffee</button>
              <h2>Pick a Flavour</h2>
              <button onClick={handleNextSlide}>Subscription Options </button>
            </div>
            <p>Content for slide 2</p>
          </>
        );
      case 3:
        return (
          <div>
            <h2>Hot Brew . Original</h2>
            <p>Content for slide 3</p>
            <button onClick={handlePreviousSlide}>Previous</button>
            {/* <button onClick={handleNextSlide}>Next</button> */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* <div className={styles.header}>
      <h2>Subscribe to your kind of coffee</h2>
     </div> */}
      {renderSlideContent()}
    </>
  );
}

export default SubscriptionPlans;
