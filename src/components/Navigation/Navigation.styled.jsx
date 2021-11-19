import styled from "styled-components";

export const Header = styled.header`
  grid-column: 2 / span 4;

  nav {
    display: flex;
    align-items: center;
    height: 100px;
  }
`;

export const Logo = styled.div`
  flex-basis: 100%;

  img {
    height: 1.875rem;
    width: auto;
    cursor: pointer;
  }
`;

export const Links = styled.div`
  flex-basis: 100%;
  text-align: center;
`;

export const Link = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${({ active }) => active && "2px solid"};

  :not(:last-child) {
    margin-right: 40px;
  }
`;

export const Icons = styled.div`
  flex-basis: 100%;
  text-align: right;

  img {
    cursor: pointer;

    :not(:first-child) {
      margin-left: 20px;
    }
  }
`;
