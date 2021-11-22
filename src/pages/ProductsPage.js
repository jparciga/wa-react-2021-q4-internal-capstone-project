import React, { useState, useEffect } from 'react';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import ProductCategoriesData from '../mocks/en-us/product-categories.json';
import { ProductPageContent } from './ProductPage.style';

export default function ProductsPage() {
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let mounted = true;
    const categoriesData = ProductCategoriesData.results.map((category) => {
      return { ...category, isSelected: false };
    });

    if (mounted) setCategories(categoriesData);

    return () => (mounted = false);
  }, []);

  useEffect(() => {
    let mounted = true;
    const categoriesSelectedArray = categories
      .filter((category) => category.isSelected)
      .map((category) => category.id);
    if (mounted) setCategoriesSelected([...categoriesSelectedArray]);
    return () => (mounted = false);
  }, [categories]);

  const selectCategoryHandler = (categoryId) => {
    let mounted = true;
    if (mounted) {
      setCategories((currentCategories) => {
        return currentCategories.map((category) => {
          if (category.id === categoryId) {
            return { ...category, isSelected: !category.isSelected };
          }
          return category;
        });
      });
    }
    return () => (mounted = false);
  };

  return (
    <ProductPageContent>
      <Sidebar
        categories={categories}
        onSelectCategory={selectCategoryHandler}
      />
      <Products
        categories={categories}
        categoriesSelected={categoriesSelected}
      />
    </ProductPageContent>
  );
}
