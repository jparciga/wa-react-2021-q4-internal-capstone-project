import React from 'react'
import ShoppingCartIconSvg from 'images/shopping-cart.svg';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ShoppingCartIcon = () => {
    const amountItems = useSelector(({shoppingCart: { amountItems } }) => amountItems);
    
    return (
        <ShoppingCartContainer>
            <img src={ShoppingCartIconSvg}  alt="shoppingcart"></img>
            { (amountItems > 0) ? <span style={{textAlign: "center"}}>{amountItems}</span> : null}       
        </ShoppingCartContainer>
    )
}


export const ShoppingCartContainer = styled.div`
  grid-area: shoppingcart;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    transform: translate(-1em, +1em);
  }
`;

export default ShoppingCartIcon;