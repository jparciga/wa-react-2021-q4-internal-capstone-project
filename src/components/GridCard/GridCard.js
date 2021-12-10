import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shoppingCartActionCreators } from 'state/index';

const GridCardComponent = ({className, cardId, url, name, category, price, stock}) => {
    const dispatch = useDispatch();
    const { addToCart } = bindActionCreators(shoppingCartActionCreators, dispatch);


    const handleOnClick = () => {
        
        addToCart({
            id: cardId, 
            quantity: 1, 
            price, 
            stock
        });

    };

    return (
        <div className={className}>
            <Link to={`/product/${cardId}`}>
                <img src={url} alt="img"></img>
            </Link>
            <span>{name}</span>
            <span>{category}</span>
            <span>{`$${price}`}</span>
            <input 
                className="addToCart" 
                type="submit" 
                value="Add to Cart"
                onClick={handleOnClick}></input>
        </div>
    )
};

const GridCard = styled(GridCardComponent)`
    display:flex;
    flex-direction:column;
    padding:0.5em;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
        object-fit: cover;
    }
`;

GridCardComponent.propTypes = {
    className: PropTypes.string, 
    cardId: PropTypes.string, 
    url: PropTypes.string, 
    name: PropTypes.string, 
    category: PropTypes.string, 
    price: PropTypes.number
};


export default GridCard;
