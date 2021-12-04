import styled from 'styled-components';
export const HeaderContainer = styled.nav`
  background-color: #222529;
  padding: 0 15px;
  color: white;
  z-index: 100;
  position: fixed;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0px;
    padding: 0px;
  }
`;

export const ShowMenuBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const HeaderMenu = styled.ul`
  list-style: none;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
`;
export const MenuItem = styled.li`
  margin: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MenuLogo = styled.li`
  font-size: 20px;
  padding: 10px 10px 10px 0;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
`;
