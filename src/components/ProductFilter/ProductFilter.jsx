import React, { useState } from "react";
import Grid from "../Grid";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard";
import {
  FilterButton,
  FilterDivider,
  ProductFilterContent,
  ProductFilterSidebar,
} from "./ProductFilter.styled";

export default function ProductFilter({ categories, products }) {
  const [filterArray, setFilterArray] = useState([]);

  function toogleFilter(typeId) {
    if (filterArray.includes(typeId)) {
      let indexToRemove = filterArray.indexOf(typeId);
      setFilterArray([
        ...filterArray.slice(0, indexToRemove),
        ...filterArray.slice(indexToRemove + 1),
      ]);
    } else {
      setFilterArray([...filterArray, typeId]);
    }
  }

  const filterButtons = categories.map((category, index) => {
    return (
      <React.Fragment key={category.id}>
        <FilterButton
          key={category.id}
          onClick={() => toogleFilter(category.id)}
          active={filterArray.includes(category.id)}
        >
          {category.name}
        </FilterButton>
        {index + 1 !== categories.length ? (
          <FilterDivider key={`divider${category.id}`} />
        ) : null}
      </React.Fragment>
    );
  });

  let filteredProducts = [...products];
  if (filterArray.length > 0) {
    filteredProducts = filteredProducts.filter(({ typeId }) =>
      filterArray.includes(typeId)
    );
  }

  let categoryNames = {};
  categories.forEach(({ id, name }) => {
    categoryNames = { ...categoryNames, [id]: name };
  });

  const productsList = filteredProducts.map((product, index) => (
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
        <Pagination />
      </ProductFilterContent>
    </>
  );
}
