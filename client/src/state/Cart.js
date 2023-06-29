// All states for cart component    
import { useSelector } from "react-redux";

const Cart = () =>{ 
    const items = useSelector((state)=> state.cart.value);
    console.log(items);
    return(
        <>
        <h1>My Cart</h1>
        </>
    )
}

export default Cart;