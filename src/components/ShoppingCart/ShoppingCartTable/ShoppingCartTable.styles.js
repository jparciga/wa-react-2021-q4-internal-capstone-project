import styled from "styled-components";
import ShoppingCartTableComponent from "./ShoppingCartTable.component";

const ShoppingCartTable = styled(ShoppingCartTableComponent)`
    display: grid;
    grid-auto-rows: 5em;
    padding:1em;
    gap: 1em;

    & > div {
        background-color: white;
        border: 2px solid black;
        border-radius: 5px;
    }
`;

export default ShoppingCartTable;