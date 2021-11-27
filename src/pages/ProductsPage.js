import React from 'react';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import { ProductPageContent } from './ProductPage.style';
import { useProductCategories } from '../utils/hooks/useProductCategories';

export default function ProductsPage({ showMenu }) {
  const [categories, categoriesSelected, setCategories] =
    useProductCategories();
  const selectCategoryHandler = (categoryId) => {
    setCategories((currentCategories) => {
      return currentCategories.map((category) => {
        if (category.id === categoryId) {
          return { ...category, isSelected: !category.isSelected };
        }
        return category;
      });
    });
  };

  return (
    <ProductPageContent>
      <Sidebar
        showMenu={showMenu}
        categories={categories}
        onSelectCategory={selectCategoryHandler}
      />
      <Products categoriesSelected={categoriesSelected} />
    </ProductPageContent>
  );
}
