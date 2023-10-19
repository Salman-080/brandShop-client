import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const cartData=useLoaderData();
    console.log(cartData)
    return (
        <div>
            <h2>cart</h2>
        </div>
    );
};

export default Cart;