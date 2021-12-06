import React from 'react'
import { useSelector } from 'react-redux';
import ShoppingCartCard from './ShoppingCartCard/ShoppingCartCard.styles';
import useProductById from 'hooks/useProductById';
import PropTypes from 'prop-types';

const ShoppingCartTableComponent = ({className}) => {

    const { items } = useSelector((state) => state.shoppingCart);
    
    const productIds = items.map(({ id }) => id);
    const [products] = useProductById(productIds, productIds.length);

    const parsedData = products.parsedData;
    const parsedDataWithQuantity = parsedData.map(element => {
        const id = element.id;
        const itemFound = items.find((item) => item.id === id);
        return (typeof(itemFound) !== 'undefined') ? { ...element, quantity: itemFound.quantity } : { ...element};
    });

    return (
        <div className={className}>
            {
                parsedDataWithQuantity.map((data) => {
                    return (<ShoppingCartCard key={data.id} data={data} />)
                })
            }
            
        </div>
    )
}

ShoppingCartTableComponent.propTypes = {
    className: PropTypes.string
};


export default ShoppingCartTableComponent;
