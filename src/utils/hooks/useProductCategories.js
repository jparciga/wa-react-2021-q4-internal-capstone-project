import { useState, useEffect } from 'react';
import ProductCategoriesData from '../../mocks/en-us/product-categories.json';

const initialCategoriesState = ProductCategoriesData.results.map((category) => {
  return { ...category, isSelected: false };
});
console.log(ProductCategoriesData);
export const useProductCategories = () => {
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [categories, setCategories] = useState(initialCategoriesState);
  useEffect(() => {
    const filteredCategories = categories
      .filter((category) => category.isSelected)
      .map((category) => category.id);
    setCategoriesSelected([...filteredCategories]);
  }, [categories]);

  return [categories, categoriesSelected, setCategories];
};
