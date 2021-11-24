import './App.css';
import { Container, Logo, Header, Search, ShoppingCart, Content, Footer} from './App.style';
import { useState } from 'react';

import Home from 'components/Home/Home';
import ProductList from 'components/ProductList/ProductList.styles'

import LogoImg from 'images/image.png';
import ShoppingCartIcon from 'images/shopping-cart.svg';

import productsData from 'mocks/products.json';
import productCategoriesData from 'mocks/product-categories.json';

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigation = () => {
    setCurrentPage((currentPage === "Home") ? "ProductList" : "Home");
  };

  return (
    <Container>
      <Header>
        <Logo>
          <img src={LogoImg} 
               onClick={() => setCurrentPage("Home")} 
               style={{cursor: "pointer"}} 
               alt="logo" 
               height="100%"></img>
        </Logo>
        <Search>
          <input type="text" disabled></input>
        </Search>
        <ShoppingCart>
          <img src={ShoppingCartIcon}  alt="shoppingcart"></img>
        </ShoppingCart>
      </Header>
      <Content>
      {currentPage === "Home" ? <Home /> : <ProductList products={productsData.results} categories={productCategoriesData.results} />}
        <div>
          <button id="btnChangePage" onClick={handleNavigation}>View All Products</button>
        </div>
      </Content>
      <Footer>Ecommerce created during Wizeline’s Academy React Bootcamp.</Footer>
    </Container>
  );
}

export default App;
