import { useState } from "react";
import Grid from "../Grid";
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

  let filterButtons = categories.map((category, index) => {
    return (
      <>
        <FilterButton
          key={category.id}
          onClick={() => toogleFilter(category.id)}
          active={filterArray.includes(category.id)}
        >
          {category.name}
        </FilterButton>
        {index + 1 !== category.length ? (
          <FilterDivider key={`divider${category.id}`} />
        ) : null}
      </>
    );
  });

  let filteredProducts = [...products];
  if (filterArray.length > 0) {
    filteredProducts = filteredProducts.filter(({ typeId }) =>
      filterArray.includes(typeId)
    );
  }

  let productsList = filteredProducts.map((product, index) => (
    <ProductCard
      key={`product${index}`}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ));

  return (
    <>
      <ProductFilterSidebar>{filterButtons}</ProductFilterSidebar>
      <ProductFilterContent>
        <Grid>{productsList}</Grid>
      </ProductFilterContent>
    </>
  );
}
