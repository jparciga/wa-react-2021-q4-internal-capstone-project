import './App.css';
import { Container, Logo, Header, Search,  Content, Footer} from './App.style';
import ShoppingCartIcon from 'components/ShoppingCartIcon/ShoppingCartIcon.component';

import PageRouter from 'components/PageRouter/PageRouter.component';

import LogoImg from 'images/image.png';

import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigation = () => {
      setCurrentPage((currentPage === "Home") ? "ProductList" : "Home");
    };

  return (
    <Container>
      <Header>
        <Logo>
          <Link to="/home">
            <img
              src={LogoImg}
              style={{ cursor: "pointer" }}
              alt="logo"
              height="100%"
            ></img>
          </Link>
        </Logo>
        <Search>
          <input
            value={searchTerm}
            onInput={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search products..."
          />
          <Link to={`/search?q=${searchTerm}`}>
            <button>Search</button>
          </Link>
        </Search>
        <ShoppingCartIcon />
      </Header>
      <Content>
        <PageRouter />
        <Link to={currentPage === "Home" ? "/products" : "/home"}>
          <button id="btnChangePage" onClick={handleNavigation}>
            View All Products
          </button>
        </Link>
        <Redirect
          exact
          from="/wa-react-2021-q4-internal-capstone-project"
          to="/home"
        />
        <Redirect exact from="/" to="/home" />
      </Content>
      <Footer>
        Ecommerce created during Wizeline's Academy React Bootcamp.
      </Footer>
    </Container>
  );
}

export default App;
