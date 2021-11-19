import React from 'react';
import ProductCard from './ProductCard';
import ProductsData from '../mocks/en-us/featured-products.json';
import { ProductList } from './Products.styles';

export default function Products({ categoryId }) {
  const products = categoryId
    ? ProductsData.results.filter(
        (prod) => prod.data.category.id === categoryId
      )
    : ProductsData.results;
  return (
    <ProductList>
      {products.map(({ id, data: { name, mainimage, category, price } }) => {
        return (
          <ProductCard
            key={id}
            id={id}
            name={name}
            mainimage={mainimage}
            category={category}
            price={price}
          />
        );
      })}
    </ProductList>
  );
}
