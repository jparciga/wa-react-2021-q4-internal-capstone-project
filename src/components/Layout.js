import React, { useState } from 'react';

import Home from './Home';
import { Footer } from './Footer.styles';
import Header from './Header';
import Content from './Content';
export default function Layout() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <Header onSetShowMenu={setShowMenu} showMenu={showMenu} />
      <Content>
        <Home onSetShowMenu={setShowMenu} showMenu={showMenu} />
      </Content>
      <Footer>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </Footer>
    </>
  );
}
