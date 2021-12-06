import React from 'react'

const ShoppingCartCardComponent = ({className}) => {
    return (
        <div className={className}>
            <img src="" alt="caca"></img>
            <span>Name</span>
            <span>Name</span>
            <span>Qty: <select><option value="1">1</option></select></span>
            <div>Subtotal</div>
            <button>Remove from Cart</button>
        </div>
    )
}

export default ShoppingCartCardComponent;
