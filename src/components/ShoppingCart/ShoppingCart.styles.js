import styled from "styled-components";
import ShoppingCartComponent from './ShoppingCart.component';

const ShoppingCart = styled(ShoppingCartComponent)`
    
    width: 90vw;    

    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
    grid-template-columns: 5fr 1fr;
    gap: 2em;
    padding: 2em;

    & > div {
        border: 1px solid black;
    }

    .shoppingCart-checkout {
        display:grid;
        align-items: center;
        justify-items: center;
    }

    .shoppingCart-total{
        display:grid;
        align-items: right;
        justify-items: right;
    }
`;

export default ShoppingCart;