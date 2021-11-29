import { useState, useEffect } from 'react';
import { useApi } from './useApi';

export const useProductCategories = (categoryFromURL) => {
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const response = useApi('category');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (!response.isLoading) {
      const categoryFilter = response.data.results.find((category) =>
        category.slugs.includes(categoryFromURL)
      );

      const newCategories = response.data.results.map((category) => {
        category.isSelected = false;
        if (categoryFilter?.id === category.id) category.isSelected = true;

        return category;
      });
      setCategories(newCategories);
    }
  }, [response, categoryFromURL]);

  useEffect(() => {
    const filteredCategories = categories
      .filter((category) => category.isSelected)
      .map((category) => category.id);
    setCategoriesSelected([...filteredCategories]);
  }, [categories]);

  return [categories, categoriesSelected, setCategories];
};
