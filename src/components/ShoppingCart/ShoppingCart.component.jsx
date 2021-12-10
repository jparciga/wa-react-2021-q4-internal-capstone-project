import React from 'react'
import PropTypes from 'prop-types';

import ShoppingCartTable from './ShoppingCartTable/ShoppingCartTable.styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingCartComponent = ({className}) => {
    const { items } = useSelector((state) => state.shoppingCart);

    const calculateTotalPrice = (items) => {
        const totalPrice = items.reduce( (previous, current) => previous + (current.price*current.quantity),0);
        return totalPrice;
    }

    return (
        <div className={className}>
            <h4>Shopping Cart</h4>
            <div></div>
            <ShoppingCartTable />
            <div></div>
            <div className="shoppingCart-total">Total: ${ calculateTotalPrice(items) }</div>
           
                <div className="shoppingCart-checkout"> <Link to="/checkout"><button>Checkout</button></Link></div>
                   
        </div>
    )
}

ShoppingCartComponent.propTypes = {
    className: PropTypes.string
};

export default ShoppingCartComponent;
