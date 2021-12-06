import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {shoppingCartActionCreators} from 'state/index';

const ShoppingCartCardComponent = ({className, data: { id, name, url, price, quantity2, stock } }) => {
    
    const { items } = useSelector((state) => state.shoppingCart);
    const {quantity} = items.find((item) => item.id === id);

    const dispatch = useDispatch();
    const { removeFromCart, changeQuantity } = bindActionCreators(shoppingCartActionCreators, dispatch);


    const quantityOptions = Array.from(Array(stock).keys());
    
    return (
        <div className={className}>
            <img src={url} alt="caca"></img>
            <span>{name}</span>
            <span>Price: ${price}</span>
            <span>Qty: 
                <select defaultValue={quantity} onInput={(e) => changeQuantity(id, parseInt(e.target.value))}>
                    {
                        quantityOptions.map((num) => { return (<option key={id+num} value={num+1}>{num+1}</option>)})
                    }     
                </select>
            </span>
            <div>Subtotal: ${price*quantity}</div>
            <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
        </div>
    )
}

export default ShoppingCartCardComponent;
