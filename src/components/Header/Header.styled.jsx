import styled from 'styled-components';

const Navbar = styled.nav`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
`;

const BrandName = styled.div`
    font-size: 23px;
    font-weight: 900;
    cursor: pointer;
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`;

const NavItem = styled.li`
    display: inline-block;
    margin: 10px 15px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Search = styled.input`
    flex: 1 0;
    min-width: 300px;
    min-height: 30px;
    font-size: inherit;
    background-color: transparent;
    padding-left: 5px;
    border: 1px solid #000;
`;

export { Navbar, BrandName, NavLinks, NavItem, Search };