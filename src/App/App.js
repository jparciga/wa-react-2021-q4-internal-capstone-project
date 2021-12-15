import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Home from 'Components/Pages/Home';
import Products from 'Components/Pages/Products';
import ProductDetail from 'Components/Pages/ProductDetail';
import SearchResults from 'Components/Pages/SearchResults';
import ScrollToTop from 'Components/ScrollToTop';
import { Wrapper, Content } from './App.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Content>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </Content>
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
