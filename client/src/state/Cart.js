// All states for cart component
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.value);
  console.log(items);
  return (
    <>
      <div className={styles["main-container-box"]}>
        <div className={styles["account-details"]}>
          <h5>hey</h5>
        </div>
        <div className={styles["order-details"]}>
          <h3>Hello</h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
