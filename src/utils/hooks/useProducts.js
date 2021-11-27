import { useState, useEffect, useRef } from 'react';
import ProductsData from '../../mocks/en-us/featured-products.json';

export const useProducts = (categoriesSelected) => {
  let [products, setProducts] = useState([]);
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    const productsData =
      categoriesSelected && categoriesSelected.length > 0
        ? ProductsData.results.filter((prod) =>
            categoriesSelected.includes(prod.data.category.id)
          )
        : ProductsData.results;
    if (isMounted.current) setProducts(productsData);
    return () => (isMounted.current = false);
  }, [categoriesSelected]);

  return products;
};
