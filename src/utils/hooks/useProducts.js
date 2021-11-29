import { useState, useEffect, useRef } from 'react';
import { useApi } from './useApi';
import { useLocation } from 'react-router';
const pagesInformation = {
  current: 1,
  total: 1,
  results_per_page: 12,
  total_pages: 1,
};
export const useProducts = (categoriesSelected) => {
  let [products, setProducts] = useState([]);
  let [pageInformation, setPageInformation] = useState(pagesInformation);
  const search = useLocation().search;
  let page = new URLSearchParams(search).get('page') ?? 1;

  const isMounted = useRef(null);
  const response = useApi('product', 12, page);

  useEffect(() => {
    isMounted.current = true;
    if (!response.isLoading) {
      console.log(response);
      const productsData =
        categoriesSelected && categoriesSelected.length > 0
          ? response.data.results.filter((prod) =>
              categoriesSelected.includes(prod.data.category.id)
            )
          : response.data.results;

      if (isMounted.current) {
        setProducts(productsData);
        setPageInformation(response);
      }
    }
  }, [response, categoriesSelected, pageInformation]);

  return [products, pageInformation];
};
