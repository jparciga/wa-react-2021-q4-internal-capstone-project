import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductsData from '../mocks/en-us/featured-products.json';
import { ProductList } from './Products.styles';
import Pagination from '../components/Pagination';

export default function Products({ categoriesSelected }) {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    let mounted = true;
    const productsData =
      categoriesSelected && categoriesSelected.length > 0
        ? ProductsData.results.filter((prod) =>
            categoriesSelected.includes(prod.data.category.id)
          )
        : ProductsData.results;
    if (mounted) setProducts(productsData);
    return () => (mounted = false);
  }, [categoriesSelected]);

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
      <Pagination
        style={{ width: '100%', textAlign: 'center' }}
        current={4}
        totalPages={10}
      />
    </ProductList>
  );
}
