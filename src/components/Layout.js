import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import Products from '../pages/ProductsPage';
import { Footer } from './Footer.styles';
import Header from './Header';
import Content from './Content';
export default function Layout() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <Header onSetShowMenu={setShowMenu} showMenu={showMenu} />
      <Content>
        <Routes>
          <Route
            path="/"
            element={<Home onSetShowMenu={setShowMenu} showMenu={showMenu} />}
          />
          <Route
            path="/products"
            element={
              <Products onSetShowMenu={setShowMenu} showMenu={showMenu} />
            }
          />
        </Routes>
      </Content>
      <Footer>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </Footer>
    </>
  );
}
