import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes';
import { Footer } from './Footer.styles';
import Header from './Header';
import Content from './Content';

const initialState = window.width > 780;
// const initialState = true;
export default function Layout() {
  const [showMenu, setShowMenu] = useState(initialState);
  return (
    <>
      <Header onSetShowMenu={setShowMenu} showMenu={showMenu} />
      <Content>
        <Routes>
          {routes.map(({ path, element: Component }, index) => {
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Component onSetShowMenu={setShowMenu} showMenu={showMenu} />
                }
              />
            );
          })}
        </Routes>
      </Content>
      <Footer>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </Footer>
    </>
  );
}
