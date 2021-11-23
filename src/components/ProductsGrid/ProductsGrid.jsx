import { useState } from "react";
import { NAVIGATION } from "../../utils/constants";
import ProductCard from "../ProductCard";
import {
  ProductsGridHeader,
  ProductsGridOption,
  ProductsGridContainer,
  ProductsGridTitle,
  Grid,
  ViewAllButton,
} from "./ProductsGrid.styled";

export default function ProductsGrid({
  title,
  categories,
  products,
  changePage,
  firstActiveCategoryId = "*",
}) {
  const [activeCategoryId, setActiveCategoryId] = useState(
    firstActiveCategoryId
  );

  const categoryControlList = [{ id: "*", name: "All" }, ...categories];

  let categoryControls = categoryControlList.map((category) => {
    if (category.id === activeCategoryId) {
      return (
        <ProductsGridOption
          key={category.id}
          onClick={() => setActiveCategoryId(category.id)}
          active
        >
          {category.name}
        </ProductsGridOption>
      );
    } else {
      return (
        <ProductsGridOption
          key={category.id}
          onClick={() => setActiveCategoryId(category.id)}
        >
          {category.name}
        </ProductsGridOption>
      );
    }
  });

  let productsList = products
    .filter(
      ({ typeId }) => typeId === activeCategoryId || activeCategoryId === "*"
    )
    .map((product, index) => (
      <ProductCard
        key={`product${index}`}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    ));

  return (
    <ProductsGridContainer>
      <ProductsGridHeader>
        <ProductsGridTitle>{title}</ProductsGridTitle>
        <div>{categoryControls}</div>
      </ProductsGridHeader>
      <Grid>{productsList}</Grid>
      <ViewAllButton onClick={() => changePage(NAVIGATION.SHOP)}>
        View all products
      </ViewAllButton>
    </ProductsGridContainer>
  );
}
