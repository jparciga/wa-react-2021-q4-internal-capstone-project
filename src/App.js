import './App.css';
import styled from 'styled-components';

import Home from 'components/Home/Home';

import LogoImg from 'images/image.png';
import ShoppingCartIcon from 'images/shopping-cart.svg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-columns: 6fr;

  grid-template-areas:
    "header"
    "content"
    "footer";

  gap: 1em;
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  background-color: orange;
  grid-area: header;
  display:grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    "logo search shoppingcart";
  gap: 1em;
`;

const Search = styled.div`
  grid-area: search;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShoppingCart = styled.div`
  grid-area: shoppingcart;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: gold;
  grid-area: content;
`;

const Footer = styled.div`
  background-color: lavender;
  grid-area: footer;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={LogoImg} alt="logo" height="100%"></img>
        </Logo>
        <Search>
          <input type="text" disabled></input>
        </Search>
        <ShoppingCart>
          <img src={ShoppingCartIcon} alt="shoppingcart"></img>
        </ShoppingCart>
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>Ecommerce created during Wizeline’s Academy React Bootcamp.</Footer>
    </Container>
  );
}

export default App;
