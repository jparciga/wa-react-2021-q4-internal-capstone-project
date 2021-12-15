import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const CategorySection = styled.section`
    flex: 1 1 20%;
    min-width: 240px;
`;

export const ProductSection = styled.section`
    flex: 4 1 80%;
    box-sizing: border-box;
    padding-bottom: 1em;
`;