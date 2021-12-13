import {ReactComponent as CartIcon} from './assets/cart.svg';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
    background-color: #282c34;
    width: 100%;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: white;
    box-sizing: border-box;

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }    
`;

export const Title = styled.h1`
    margin: 0;
    text-align: left;
`;

export const SearchForm = styled.form`
    margin: 0;
`;

export const Icon = styled(CartIcon)`
    height: 1.7em;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
`;

export const ActionLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    flex-grow: 1;
`;