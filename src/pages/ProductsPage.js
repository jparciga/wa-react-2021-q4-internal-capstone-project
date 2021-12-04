import React from 'react';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import { ProductPageContent } from './ProductPage.style';
import { useProductCategories } from '../utils/hooks/useProductCategories';
import { useLocation } from 'react-router';

export default function ProductsPage({ showMenu }) {
  const search = useLocation().search;
  const categoryFromURL = new URLSearchParams(search).get('category');
  const [categories, categoriesSelected, setCategories] =
    useProductCategories(categoryFromURL);

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
        categories={categories}
        onSelectCategory={selectCategoryHandler}
      />
      <Products categoriesSelected={categoriesSelected} />
    </ProductPageContent>
  );
}
