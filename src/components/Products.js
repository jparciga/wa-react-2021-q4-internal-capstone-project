import React from 'react';
import ProductCard from './ProductCard';
import { ProductList } from './Products.styles';
import Pagination from '../components/Pagination';
import { useProducts } from '../utils/hooks/useProducts';
export default function Products({ categoriesSelected }) {
  const [products, pageInformation] = useProducts(categoriesSelected);

  return (
    <ProductList>
      {products &&
        products.map(({ id, data: { name, mainimage, category, price } }) => {
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
      {pageInformation?.data?.page}
      <Pagination
        style={{ width: '100%', textAlign: 'center' }}
        current={pageInformation?.data?.page}
        totalPages={pageInformation?.data?.total_pages}
      />
    </ProductList>
  );
}
