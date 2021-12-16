import styled from "styled-components";
import GridComponent from 'components/Grid/Grid';

const Grid = styled(GridComponent)`
    display: grid;
    grid-template-rows: 1fr auto;
    justify-items: center;
        
    background-color: #ECC344;
    padding: 2em;

    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5em;
    }

    .grid-container div {
        background-color: white;
        border: 2px solid black;
        border-radius: 5px;
    }

    .grid-container span {
        padding: 0.5em;
    }`;

export default Grid;