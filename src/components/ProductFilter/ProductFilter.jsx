import React from "react";
import { useLocation } from "react-router";
import { NAVIGATION } from "../../utils/constants";
import Grid from "../Grid";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard";
import {
  FilterButton,
  FilterDivider,
  ProductFilterContent,
  ProductFilterSidebar,
} from "./ProductFilter.styled";

export default function ProductFilter({ categories, products, totalPages }) {
  const { filter = [] } = useLocation().state || {};
  const clearFilters = { id: "-", name: "Clear Filters" };

  let categoriesArray =
    filter.length > 0 ? [clearFilters, ...categories] : [...categories];

  const filterButtons = categoriesArray.map((category, index) => {
    const state = { page: 1 };
    if (category.id === clearFilters.id) {
      state.filter = [];
    } else if (filter.includes(category.id)) {
      const indexToRemove = filter.indexOf(category.id);
      state.filter = [
        ...filter.slice(0, indexToRemove),
        ...filter.slice(indexToRemove + 1),
      ];
    } else {
      state.filter = [...filter, category.id];
    }

    return (
      <React.Fragment key={category.id}>
        <FilterButton
          key={category.id}
          to={NAVIGATION.SHOP}
          state={state}
          active={filter.includes(category.id)}
        >
          {category.name}
        </FilterButton>
        {index + 1 !== categoriesArray.length ? (
          <FilterDivider key={`divider${category.id}`} />
        ) : null}
      </React.Fragment>
    );
  });

  let categoryNames = {};
  categories.forEach(({ id, name }) => {
    categoryNames = { ...categoryNames, [id]: name };
  });

  const productsList = products.map((product, index) => (
    <ProductCard
      key={`product${index}`}
      image={product.image}
      category={categoryNames[product.typeId]}
      name={product.name}
      price={product.price}
    />
  ));

  return (
    <>
      <ProductFilterSidebar>{filterButtons}</ProductFilterSidebar>
      <ProductFilterContent>
        <Grid>{productsList}</Grid>
        <Pagination totalPages={totalPages} />
      </ProductFilterContent>
    </>
  );
}
