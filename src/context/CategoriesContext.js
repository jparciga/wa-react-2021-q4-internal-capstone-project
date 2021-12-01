import { createContext, useState } from 'react';
import { useApi } from '../utils/hooks/useApi';

const CategoriesContext = createContext({
  categories: [],
  categoriesSelected: [],
});

export const CategoriesContextProvider = ({ children }) => {
  const categories = useApi('category', 10, 1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const context = {
    categories: categories,
    selectedCategories: selectedCategories,
  };

  return (
    <CategoriesContext.Provider value={context}>
      {children}
    </CategoriesContext.Provider>
  );
};
