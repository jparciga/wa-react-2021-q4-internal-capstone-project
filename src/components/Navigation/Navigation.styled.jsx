import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Header = styled.header`
  grid-column: 2 / span 4;

  nav {
    display: flex;
    align-items: center;
    height: 100px;
  }
`;

export const Logo = styled(Link)`
  flex-basis: 100%;

  img {
    height: 1.875rem;
    width: auto;
    cursor: pointer;
  }
`;

export const Pages = styled.div`
  flex-basis: 100%;
  text-align: center;
`;

export const Page = styled(NavLink)`
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid;
  }

  :not(:last-child) {
    margin-right: 40px;
  }
`;

export const Icons = styled.div`
  flex-basis: 100%;
  text-align: right;
  display: flex;
  justify-content: end;
  align-content: center;

  *:not(:first-child) {
    margin-left: 20px;
  }
`;

export const Icon = styled(Link)`
  display: flex;
`;

export const SearchBar = styled.input`
  border: solid 3px ${({ theme }) => theme.accentWeak};
  border-radius: 10px;
  text-align: center;
  font-weight: 700;
  outline: none;
`;
