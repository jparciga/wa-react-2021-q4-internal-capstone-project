import { useState, useEffect, useRef } from 'react';
import { useApi } from './useApi';
import { useLocation } from 'react-router';

export const useProducts = (categoriesSelected = []) => {
  const search = useLocation().search;
  let page = new URLSearchParams(search).get('page') ?? 1;
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const isMounted = useRef(null);
  const response = useApi('product', 12, page);
  const productsResponse = response?.data.results;
  useEffect(() => {
    isMounted.current = true;
    if (!response.isLoading) {
      const productsData =
        categoriesSelected.length > 0
          ? productsResponse.filter((prod) =>
              categoriesSelected.includes(prod.data.category.id)
            )
          : productsResponse;
      if (isMounted.current) {
        setProducts(productsData);
        setTotalPages(response?.data?.total_pages);
      }
    }
    return () => {
      isMounted.current = false;
    };
  }, [productsResponse, response, categoriesSelected]);

  return [products, totalPages];
};
