import { useState } from "react";
import { NAVIGATION } from "../../utils/constants";
import Grid from "../Grid";
import ProductCard from "../ProductCard";
import {
  FeaturedProductsHeader,
  FeaturedProductsOption,
  FeaturedProductsContainer,
  FeaturedProductsTitle,
  ViewAllButton,
} from "./FeaturedProducts.styled";

const ALL_CATEGORY_ID = "*";

export default function FeaturedProducts({
  title,
  categories,
  products,
  firstActiveCategoryId = ALL_CATEGORY_ID,
}) {
  const [activeCategoryId, setActiveCategoryId] = useState(
    firstActiveCategoryId
  );

  const categoryControlList = [
    { id: ALL_CATEGORY_ID, name: "All" },
    ...categories,
  ];

  const categoryControls = categoryControlList.map(({ id, name }) => {
    return (
      <FeaturedProductsOption
        key={id}
        onClick={() => setActiveCategoryId(id)}
        active={id === activeCategoryId}
      >
        {name}
      </FeaturedProductsOption>
    );
  });

  let categoryNames = {};
  categories.forEach(({ id, name }) => {
    categoryNames = { ...categoryNames, [id]: name };
  });

  const productsList = products.data.results
    .filter(
      ({ data }) =>
        activeCategoryId === data.category.id ||
        activeCategoryId === ALL_CATEGORY_ID
    )
    .map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        category={categoryNames[product.data.category.id]}
      />
    ));

  return (
    <FeaturedProductsContainer>
      <FeaturedProductsHeader>
        <FeaturedProductsTitle>{title}</FeaturedProductsTitle>
        <div>{categoryControls}</div>
      </FeaturedProductsHeader>
      <Grid>{productsList}</Grid>
      <ViewAllButton to={NAVIGATION.SHOP}>View all products</ViewAllButton>
    </FeaturedProductsContainer>
  );
}
