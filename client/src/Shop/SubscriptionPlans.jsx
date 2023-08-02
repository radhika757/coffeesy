import React, { useState } from "react";
import styles from "./SubscriptionPlans.module.css";

function SubscriptionPlans() {
  const [currentSlide, setCurrentSlide] = useState(1);

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
            {/* // <div className={styles['slide-box']}> */}
            <div className={styles["slide-box-headers"]}>
              <span></span>
              <h2>Choose a Coffee</h2>
              <button onClick={handleNextSlide}>Pick a Flavour > </button>
            </div>

            <div className={styles.options}>
              <span>Instant Coffee</span>
              <span>Cold brew</span>
              <span>Hot brew</span>
              <span>Ground coffee</span>
              <span>Cold coffee cans</span>
              <span>Iced coffee bottles</span>
            </div>

            {/* // </div> */}
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
