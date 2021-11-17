import React from 'react';
import ProductCategoriesData from '../mocks/en-us/product-categories.json';
import { Category, CategoriesContainer } from './Categories.styles';

export default function Categories({ showMenu }) {
  return (
    showMenu && (
      <CategoriesContainer>
        {ProductCategoriesData.results.map((category) => {
          return <Category key={category.id}>{category.data.name}</Category>;
        })}
      </CategoriesContainer>
    )
  );
}
