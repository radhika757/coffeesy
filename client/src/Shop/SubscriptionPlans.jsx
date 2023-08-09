import React, { useState, useEffect } from "react";
import styles from "./SubscriptionPlans.module.css";
import left from "../assets/subscribe/left.png";
import right from "../assets/subscribe/right.png";
import axios from "axios";
import { Rings } from "react-loader-spinner";

function SubscriptionPlans() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [getSubscriptionDetails, setSubscriptionDetails] = useState([]);
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [getSubscriptionFlavours, setSubscriptionFlavours] = useState([]);

  const handleNextSlide = () => {
    if (clickedBoxes.length !== 0) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setClickedBoxes([]);
    }
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

  function sendSelectedCoffee(id, name) {
    console.log(id, name);
    setClickedBoxes((prevClickedBoxes) => {
      // const updatedClickedBoxes = [...prevClickedBoxes];
      const updatedClickedBoxes = [];
      updatedClickedBoxes[id] = !updatedClickedBoxes[id];
      return updatedClickedBoxes;
    });
    getDetails();

    // send selected coffee's id
    async function getDetails() {
      try {
        const response = await axios.get(
          `http://localhost:3001/get-coffee-flavor/${id}`
        );
        setSubscriptionFlavours(response);
        console.log(response);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }
  }

  function boxClass(id) {
    return clickedBoxes[id] ? styles["clicked-item"] : styles["grid-item-box"];
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
                {getSubscriptionDetails === [] ? (
                  <div className={styles.content}>
                    <h1>loading...</h1>
                  </div>
                ) : (
                  <>
                    {getSubscriptionDetails.map((data) => (
                      <div
                        key={data.id}
                        className={boxClass(data.id)}
                        // className={isClicked ? styles["clicked-item"] : styles["grid-item-box"]}
                        onClick={() => sendSelectedCoffee(data.id, data.name)}
                      >
                        <div className={styles["grid-image"]}>
                          <img
                            src={require(`../assets/subscribe/${data.image}`)}
                            alt="imgs"
                          />
                        </div>
                        {/* Product Description */}
                        <div className={styles.content}>
                          <h4>{data.name}</h4>
                          <h4>Starting from &#8377;250</h4>
                        </div>
                        <div className={styles.descrip}>{data.description}</div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles["main-container-box"]}>
              <div className={styles["slide-box"]}>
                <div className={styles["slide-box-headers"]}>
                  <button onClick={handlePreviousSlide}>
                    <img src={left} style={{ margin: "5px" }} />
                    <span> Choose a Coffee</span>
                  </button>
                </div>
                <div className={styles.title}>
                  <h2>Pick a Flavour</h2>
                </div>
                <div className={styles.right}>
                  <button onClick={handleNextSlide}>
                    <span>Select Frequency</span>
                    <img src={right} style={{ margin: "5px" }} />
                  </button>
                </div>
              </div>
              <p>Content for slide 2</p>
            </div>
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
