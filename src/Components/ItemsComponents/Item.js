import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemtoCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Item = ({item}) => {
    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useDispatch();

    return (<div>
    <div className="item" >
        <img src={ `./${item.img}.jpg` } width='400px' alt=""/>
        <h2 className="item-name">{ item.name }</h2>
        <div className="itemPrice"> 
        <p className="item-price">{ item.price } NOK</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="btn-add" onClick={() => {dispatch(addItemtoCart({item, quantity}));
    }}>Legg i handlekurv</button>
    </div>
    </div>
    </div>
    )
}

export default Item;


