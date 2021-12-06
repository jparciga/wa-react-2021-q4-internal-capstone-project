import React from 'react'
import PropTypes from 'prop-types';

import ShoppingCartTable from './ShoppingCartTable/ShoppingCartTable.styles';
import { useSelector } from 'react-redux';

const ShoppingCartComponent = ({className}) => {

    const { items } = useSelector((state) => state.shoppingCart);

    return (
        <div className={className}>
            <h4>Shopping Cart</h4>
            <div></div>
            <ShoppingCartTable />
            <div></div>
            <div className="shoppingCart-total">Total: ${ items.reduce( (previous, current) => previous + (current.price*current.quantity),0) }</div>
            <div className="shoppingCart-checkout"><button>Checkout</button></div>            
        </div>
    )
}

ShoppingCartComponent.propTypes = {
    className: PropTypes.string
};

export default ShoppingCartComponent;
