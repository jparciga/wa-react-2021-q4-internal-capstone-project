import React, { useState } from 'react';
import styled from 'styled-components';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import { ImMenu } from 'react-icons/im';
import Home from './Home';
const Footer = styled('div')`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #222529;
  color: white;
  text-align: center;
  padding: 10px 0px;
`;

const Header = styled.nav`
  background-color: #222529;
  padding: 0 15px;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
`;
const ShowMenuBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Menu = styled.ul`
  list-style: none;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const MenuItem = styled.li`
  padding: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MenuLogo = styled.li`
  font-size: 20px;
  padding: 7.5px 10px 7.5px 0;
`;
const SearchInput = styled.input`
  padding: 10px;
`;
const SearchButton = styled.button`
  padding: 11px;
  background: #2196f3;
  color: white;
  border: none;
  cursor: pointer;
`;
const Content = styled.div`
  width: 100%;
`;
export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Header>
        <Menu>
          <ShowMenuBtn>
            <ImMenu onClick={() => setShowMenu(!showMenu)} />
          </ShowMenuBtn>
          <MenuLogo> Logo </MenuLogo>
          <MenuItem> HOME </MenuItem>
          <MenuItem>
            <SearchInput placeholder="Search Products..." />
            <SearchButton>
              <GiMagnifyingGlass />
            </SearchButton>
          </MenuItem>
          <MenuItem>
            <HiShoppingCart />
          </MenuItem>
        </Menu>
      </Header>
      <Content>
        <Home showMenu={showMenu} />
      </Content>
      <Footer>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </Footer>
    </>
  );
}
