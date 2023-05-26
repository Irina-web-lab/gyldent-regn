import dataItems from "../../data/dataItems";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import trash from '../Cart/trash.png';

const CartItem = ({cartItem}) => {
    console.log(cartItem)
    const items = dataItems.find(item => item.id === cartItem.itemId)
        console.log(items)
    const dispatch = useDispatch();
    return (
        <div>
            <p>{items.name}</p>
            <p>{cartItem.quantity} styk(er)</p>
            <p>Price: {items.price * cartItem.quantity} NOK</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src={trash} alt=''/>
            </span>
        </div>
)
}

export default CartItem;
