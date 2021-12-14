import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
    display: inline-block;
    padding: 0;
    margin: 0;
    border: 0;
    text-decoration: none;
`;

export const Title = styled.p`
    color: white;
    background-color: black;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.2em 1em;
    margin: 0;
`;

export const Image = styled.img`
    width: 100%;
`;
