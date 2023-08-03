import React, { useState } from "react";
import styles from "./SubscriptionPlans.module.css";
import left from "../assets/subscribe/left.png";
import right from "../assets/subscribe/right.png";

function SubscriptionPlans() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedState, setSelectedSate] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };
  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return (
          <>
            <div className={styles["main-container-box"]}>
              <div className={styles["slide-box"]}>
                <div className={styles["slide-box-headers"]}>
                  <button onClick={handlePreviousSlide} disabled>
                    <span> Choose a Coffee</span>
                    <img src={left} style={{ margin: "5px" }} />
                  </button>
                </div>
                <div className={styles.title}>
                  <h2>Choose a Coffee</h2>
                </div>
                <div className={styles.right}>
                  <button onClick={handleNextSlide}>
                  <img src={right} style={{ margin: "5px" }} />
                    <span>Pick a Flavour</span>
                
                  </button>
                </div>
              </div>
              <div className={styles["options-grid"]}>
                <div className={styles["grid-item"]}>Instant Coffee</div>
                <div className={styles["grid-item"]}>Cold brew</div>
                <div className={styles["grid-item"]}>Hot brew</div>
                <div className={styles["grid-item"]}>Ground coffee</div>
                <div className={styles["grid-item"]}>Cold coffee cans</div>
                <div className={styles["grid-item"]}>Iced coffee bottles</div>
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
