import React, { useState } from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";

const AllProducts = ({ products, categories }) => {
  const [sidebarCategories, setItems] = useState(categories);
  const [shownProducts, setProducts] = useState(products);

  const updateFilter = (id) => {
    let newSidebarCategories = [];
    let filter = [];
    for (var categoriesCounter in sidebarCategories) {
      var category = sidebarCategories[categoriesCounter];

      if (category.id === id) {
        category.selected = !category.selected;
      }

      newSidebarCategories.push({
        name: category.name,
        id: category.id,
        selected: category.selected,
      });

      if (category.selected) {
        filter.push(category.id);
      }
    }

    setItems(newSidebarCategories);

    if (filter.length === 0) {
      setProducts(products);
    } else {
      let filteredProducts = [];
      for (var productCounter in products) {
        var product = products[productCounter];

        if (filter.includes(product.categoryId)) {
          filteredProducts.push(product);
        }
      }
      setProducts(filteredProducts);
    }
  };

  return (
    <div>
      <Sidebar categories={sidebarCategories} event={updateFilter} />
      {shownProducts.map((product) => {
        const category = sidebarCategories.find(
          (category) => category.id === product.categoryId
        ).name;
        return (
          <div key={product.id}>
            <Product product={product} category={category} />
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
