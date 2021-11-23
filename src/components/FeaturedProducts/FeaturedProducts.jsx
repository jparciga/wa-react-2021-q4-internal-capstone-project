import { useState } from "react";
import { NAVIGATION } from "../../utils/constants";
import ProductCard from "../ProductCard";
import {
  FeaturedProductsHeader,
  FeaturedProductsOption,
  FeaturedProductsContainer,
  FeaturedProductsTitle,
  Grid,
  ViewAllButton,
} from "./FeaturedProducts.styled";

export default function FeaturedProducts({
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
        <FeaturedProductsOption
          key={category.id}
          onClick={() => setActiveCategoryId(category.id)}
          active
        >
          {category.name}
        </FeaturedProductsOption>
      );
    } else {
      return (
        <FeaturedProductsOption
          key={category.id}
          onClick={() => setActiveCategoryId(category.id)}
        >
          {category.name}
        </FeaturedProductsOption>
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
    <FeaturedProductsContainer>
      <FeaturedProductsHeader>
        <FeaturedProductsTitle>{title}</FeaturedProductsTitle>
        <div>{categoryControls}</div>
      </FeaturedProductsHeader>
      <Grid>{productsList}</Grid>
      <ViewAllButton onClick={() => changePage(NAVIGATION.SHOP)}>
        View all products
      </ViewAllButton>
    </FeaturedProductsContainer>
  );
}
