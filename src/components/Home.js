import React from 'react';
import Categories from './Categories';
import Products from './Products';
import Slider from './Slider';

export default function Home({ onSetShowMenu, showMenu }) {
  return (
    <>
      <Slider />
      <Categories onSetShowMenu={onSetShowMenu} showMenu={showMenu} />
      <Products />
    </>
  );
}
