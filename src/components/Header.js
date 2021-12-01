import React, { useState, useContext } from 'react';
import {
  HeaderContainer,
  HeaderMenu,
  MenuLogo,
  MenuItem,
  SearchInput,
  ShowMenuBtn,
  SearchButton,
} from './Header.styles';
import ThemeContext from '../context/ThemeContext';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import { ImMenu } from 'react-icons/im';
import { Link } from 'react-router-dom';
export default function Header() {
  const [searchInput, setSearchInput] = useState('');
  const ThemeCtx = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <HeaderMenu>
        <ShowMenuBtn style={{ margin: '0px', padding: '0px' }}>
          <ImMenu
            style={{ margin: '0px', padding: '0px' }}
            onClick={() => ThemeCtx.changeShowMenu()}
          />
        </ShowMenuBtn>
        <MenuLogo>
          <Link to="/"> Logo </Link>
        </MenuLogo>
        <MenuItem> HOME </MenuItem>
        <MenuItem>
          <SearchInput
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Products..."
          />
          <Link to={`search?q=${searchInput}`}>
            <SearchButton>
              <GiMagnifyingGlass />
            </SearchButton>
          </Link>
        </MenuItem>
        <MenuItem>
          <HiShoppingCart />
        </MenuItem>
      </HeaderMenu>
    </HeaderContainer>
  );
}
