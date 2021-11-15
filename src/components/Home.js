import React from 'react';
import Categories from './Categories';
import Products from './Products';
import Slider from './Slider';

export default function Home({ showMenu }) {
  return (
    <>
      <Slider />
      <Categories showMenu={showMenu} />
      <Products />
    </>
  );
}
