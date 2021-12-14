import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shoppingCartActionCreators } from 'state/index';

const ListCardComponent = ({className, data: { id, url, name, category, price, shortDescription, stock }}) => {
    const dispatch = useDispatch();
    const { addToCart } = bindActionCreators(shoppingCartActionCreators, dispatch);
    
    const handleOnClick = () => {
        addToCart({id, name, quantity: 1, price, stock: stock});
    }

    return (
        <div className={className}>
            <img src={url} alt="haha"></img>
            <div className="list-card-data">
                 <h4>{name}</h4>
                <span>{category}</span>
                <span>{`$${price}`}</span>
                <p>{shortDescription}</p>
            </div>
            <input 
                className="addToCart" 
                type="submit" 
                value="Add to Cart"
                onClick={handleOnClick}></input>
        </div>
    )
}

ListCardComponent.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        name: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number,
        shortDescription: PropTypes.string
    })
};

export default ListCardComponent;