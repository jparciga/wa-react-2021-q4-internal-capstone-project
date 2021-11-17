import './App.css';
import { Container, Logo, Header, Search, ShoppingCart, Content, Footer} from './App.style';

import Home from 'components/Home/Home';

import LogoImg from 'images/image.png';
import ShoppingCartIcon from 'images/shopping-cart.svg';

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
