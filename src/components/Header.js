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

export default function Header({ onSetShowMenu, showMenu }) {
  return (
    <HeaderContainer>
      <HeaderMenu>
        <ShowMenuBtn>
          <ImMenu onClick={() => onSetShowMenu(!showMenu)} />
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
      </HeaderMenu>
    </HeaderContainer>
  );
}
