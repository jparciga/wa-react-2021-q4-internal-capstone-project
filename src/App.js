import './App.css';
import { Container, Logo, Header, Search, ShoppingCart, Content, Footer} from './App.style';
import { useState } from 'react';

import Home from 'components/Home/Home';
import ProductList from 'components/ProductList/ProductList.styles'

import LogoImg from 'images/image.png';
import ShoppingCartIcon from 'images/shopping-cart.svg';

import productsData from 'mocks/products.json';
import productCategoriesData from 'mocks/product-categories.json';

import {Switch, Route, Link, Redirect } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/products'>
            <ProductList products={productsData.results} categories={productCategoriesData.results} />
          </Route>
          <Route path='*'>
            <span>404 Not Found.</span>
          </Route>
        </Switch>
        <Link to={(currentPage === "Home") ? '/products' : '/home'}>
          <button id="btnChangePage" onClick={handleNavigation}>View All Products</button>
        </Link>

        <Redirect exact from='/wa-react-2021-q4-internal-capstone-project' to='/home'  />
        <Redirect exact from='/' to='/home' />
        <Redirect exact from='/home' to='/home' />
      </Content>
      <Footer>Ecommerce created during Wizeline’s Academy React Bootcamp.</Footer>
    </Container>
  );
}

export default App;
