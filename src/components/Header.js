import React from 'react';
import {
  HeaderContainer,
  HeaderMenu,
  MenuLogo,
  MenuItem,
  SearchInput,
  ShowMenuBtn,
  SearchButton,
} from './Header.styles';

import { GiMagnifyingGlass } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import { ImMenu } from 'react-icons/im';
import { Link } from 'react-router-dom';
export default function Header({ onSetShowMenu, showMenu }) {
  return (
    <HeaderContainer>
      <HeaderMenu>
        <ShowMenuBtn>
          <ImMenu onClick={() => onSetShowMenu(!showMenu)} />
        </ShowMenuBtn>
        <MenuLogo>
          <Link to="/"> Logo </Link>
        </MenuLogo>
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
      </HeaderMenu>
    </HeaderContainer>
  );
}
