import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, getTotalQuantity } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import cart from '../Cart/cart.png';
import { useState } from "react";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [modalActive, setModalActive] = useState(false);
    const totalQuantity = useSelector(getTotalQuantity);
    

    return (
        <div className="cart">

        <div  className="cart-icon"> 
            <img
                className="cartIcon" onClick={() => setModalActive(true)}
                src={cart} alt=""/>
            <p className="total-quantity">{totalQuantity}</p>
        </div>

        <div
                onClick={() => setModalActive(false)}
                className={modalActive ? "modal activated" : "modal"}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={
                        modalActive ? "modal__content activated" : "modal__content"
                    }>
                    <h2>Din kurv</h2>
                    <p>{totalQuantity} styk(er)</p>

                    {cartItems.map((cartItem) => (
                        <CartItem 
                        cartItem={cartItem}
                        key={cartItem.id} />
                    ))}
                    <div className="cart-info">
                        <h5>Total price:</h5>
                        <h5>{totalPrice} NOK</h5>
                    </div>
                </div>
            </div>            
        </div>
    );
};
        
export default Cart;
