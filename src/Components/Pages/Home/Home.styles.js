import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeaturedProducts = styled.section`
    box-sizing: border-box;
    padding-bottom: 2em;
`;

export const ActionLink = styled(Link)`
    border: none;
    font-weight: bold;
    color: white;
    background-color: #282c34;
    padding: 0.5em 0.75em;
    margin-top: 1em;
    cursor: pointer;
    text-decoration: none;  
    box-sizing: border-box;
    display: inline-block;
`;

