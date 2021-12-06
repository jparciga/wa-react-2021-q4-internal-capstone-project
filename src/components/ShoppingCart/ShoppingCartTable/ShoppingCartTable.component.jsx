import React from 'react'
import ShoppingCartCard from './ShoppingCartCard/ShoppingCartCard.styles';

const ShoppingCartTableComponent = ({className}) => {
    return (
        <div className={className}>
            <ShoppingCartCard />
            <ShoppingCartCard />

        </div>
    )
}

export default ShoppingCartTableComponent;
