import React from 'react'
import PropTypes from 'prop-types';

import ShoppingCartTable from './ShoppingCartTable/ShoppingCartTable.styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { checkoutActionCreators } from 'state/index';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const ShoppingCartComponent = ({className}) => {
    const { items } = useSelector((state) => state.shoppingCart);
    const dispatch = useDispatch()
    const { setCheckoutSummary } = bindActionCreators(checkoutActionCreators, dispatch);
    const history = useHistory();

    const calculateTotalPrice = () => {
        const totalPrice = items.reduce( (previous, current) => previous + (current.price*current.quantity),0);
        return totalPrice;
    }

    const proceedToCheckout = () => {

        const orderSummary = items.map(({ name, price, quantity }) => {
            return {
                name, 
                quantity,
                subtotal: price*quantity
            }
        });

        const checkoutData = { orderSummary, total: calculateTotalPrice(items)}

        setCheckoutSummary(checkoutData);
        history.push("/checkout");
    }

    return (
        <div className={className}>
            <h4>Shopping Cart</h4>
            <div></div>
            <ShoppingCartTable />
            <div></div>
            <div className="shoppingCart-total">Total: ${ calculateTotalPrice }</div>
            <div className="shoppingCart-checkout"><button onClick={ proceedToCheckout }>Checkout</button></div>              
        </div>
    )
}

ShoppingCartComponent.propTypes = {
    className: PropTypes.string
};

export default ShoppingCartComponent;
