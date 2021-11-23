import styled from 'styled-components';

const Navbar = styled.nav`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    height: 80px;
`;

const BrandName = styled.div`
    font-size: 23px;
    font-weight: 900;
    margin: 10px 15px;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 576px) {
        font-size: 18px;
    }
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
    min-height: 25px;
    width: 300px;
    background-color: transparent;
    border: 1px solid #000;

    @media (max-width: 768px) {
        width: 200px;
    }

    @media (max-width: 576px) {
        width: 150px;
    }
`;

export { Navbar, BrandName, NavLinks, NavItem, Search };