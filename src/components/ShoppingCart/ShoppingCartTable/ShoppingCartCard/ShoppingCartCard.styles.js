import styled from "styled-components";
import ShoppingCartCardComponent from "./ShoppingCartCard.component";

const ShoppingCartCard = styled(ShoppingCartCardComponent)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
        object-fit: cover;
    }
`;

export default ShoppingCartCard;