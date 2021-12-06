import React from 'react'
import PropTypes from 'prop-types';

import ShoppingCartTable from './ShoppingCartTable/ShoppingCartTable.styles';

const ShoppingCartComponent = ({className}) => {

    return (
        <div className={className}>
            <h4>Shopping Cart</h4>
            <div></div>
            <ShoppingCartTable />
            <div></div>
            <div className="shoppingCart-total">Total: $1000</div>
            <div className="shoppingCart-checkout"><button>Checkout</button></div>            
        </div>
    )
}

ShoppingCartComponent.propTypes = {
    className: PropTypes.string
};

export default ShoppingCartComponent;
