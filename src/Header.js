import React from 'react'
import img from './image.png'
import styled from 'styled-components';


const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const SearchInput = styled.input`
    width: 50%;
    height: 10px;
    padding: 1em 1em;
`;

const ImgLogo = styled.img`
    width: 100px;
    height: 100px;
`;

const Header = (props) => {
    return (
    <header>
        <ImgLogo id="logo" src={img} alt="logo" disabled></ImgLogo>
        <SearchInput id="txtSearch" disabled/>
        <Button id="btnSearch" primary disabled>Search</Button>
    </header>
    );
};

export default Header;