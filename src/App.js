import './App.css';
import { Container, Logo, Header, Search, ShoppingCart, Content, Footer} from './App.style';

import PageRouter from 'components/PageRouter/PageRouter.component';

import LogoImg from 'images/image.png';
import ShoppingCartIcon from 'images/shopping-cart.svg';

import {Link } from 'react-router-dom';

const App = () => {




  return (
    <Container>
      <Header>
        <Logo>
          <Link to='/home'>
          <img src={LogoImg} 
               style={{cursor: "pointer"}} 
               alt="logo" 
               height="100%"></img>
          </Link>
        </Logo>
        <Search>
          <input type="text" disabled></input>
        </Search>
        <ShoppingCart>
          <img src={ShoppingCartIcon}  alt="shoppingcart"></img>
        </ShoppingCart>
      </Header>
      <Content>
        <PageRouter />
      </Content>
      <Footer>Ecommerce created during Wizeline’s Academy React Bootcamp.</Footer>
    </Container>
  );
}

export default App;
