import styled from "styled-components";

export const Wrapper = styled.div`
    display: block;
    box-sizing: border-box;
    padding: 2em 0;
`;

export const BasicInformation = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
`;

export const DetailedInformation = styled.section`
    display: block;
    width: 100%;
`;

export const Overview = styled.div`
    min-width: 320px;
    max-width: 100%;
    height: fit-content;
    flex: 1 1 50%;
    padding: 1em;
    box-sizing: border-box;
    margin: auto 0;
`;

export const Gallery = styled.div`
    max-height: 480px;
    max-width: 100%;
    flex: 1 1 50%;
    padding: 1em;
    box-sizing: border-box;
`;

export const Tags = styled.ul`
    padding: 0;
    margin: 1em 0;
    list-style-type: none;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    align-content: space-evenly;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Tag = styled.li`
    width: auto;
    padding: 0.25em 1em;
    margin: 0.25em;
    background-color: #282c34;
    color: white;
    border-radius: 50px;
    text-align: center;
`;