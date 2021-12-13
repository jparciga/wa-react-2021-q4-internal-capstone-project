import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    box-sizing: border-box;
`;

export const GridContainer = styled.ul`
    padding: 0;
    margin: auto;
    list-style-type: none;
    display: flex;
    flex-flow: row;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const GridItem = styled.li`
    flex: 0 0 20%;
    min-width: 240px;
    position: relative;
`;