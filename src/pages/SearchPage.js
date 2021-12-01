import React from 'react';
import { useSearch } from '../utils/hooks/useSearch';
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router';
import { ProductList } from '../components/Products.styles';
import Pagination from '../components/Pagination';
export default function SearchPage() {
  const search = useLocation().search;
  const productToSearch = new URLSearchParams(search).get('q');

  const response = useSearch(productToSearch);

  return (
    <ProductList>
      {response.data.results &&
        response?.data?.results.map((product) => {
          return (
            <ProductCard
              id={product.id}
              name={product.data.name}
              price={product.data.price}
              mainimage={product.data.mainimage}
              category={product.data.category.slug}
              product={product}
            />
          );
        })}

      {response && (
        <Pagination
          style={{ width: '100%', textAlign: 'center' }}
          current={response.data.page}
          totalPages={response.data.total_pages}
        />
      )}
    </ProductList>
  );
}
