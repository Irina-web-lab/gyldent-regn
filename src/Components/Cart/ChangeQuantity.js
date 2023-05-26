const ChangeQuantity = ({quantity, setQuantity}) => {
     const addQuantity = () => {
        const newQuantity = quantity+1;
        setQuantity(newQuantity);
     }
     const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity-1;
        setQuantity(newQuantity);
    }
    return (<div className="quantity">        
        <button className="btn-quantity" onClick={removeQuantity}> - </button>
        <span>{quantity}</span>
        <button className="btn-quantity" onClick={addQuantity}> + </button>
        </div>
    )
}

export default ChangeQuantity;
