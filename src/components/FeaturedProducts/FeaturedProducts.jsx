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

  const categoryControls = categoryControlList.map((category) => {
    return (
      <FeaturedProductsOption
        key={category.id}
        onClick={() => setActiveCategoryId(category.id)}
        active={category.id === activeCategoryId}
      >
        {category.name}
      </FeaturedProductsOption>
    );
  });

  let categoryNames = {};
  categories.forEach(({ id, name }) => {
    categoryNames = { ...categoryNames, [id]: name };
  });

  const productsList = products
    .filter(
      ({ typeId }) =>
        activeCategoryId === typeId || activeCategoryId === ALL_CATEGORY_ID
    )
    .map((product, index) => (
      <ProductCard
        key={`product${index}`}
        productId={product.id}
        image={product.image}
        category={categoryNames[product.typeId]}
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
      <ViewAllButton to={NAVIGATION.SHOP}>View all products</ViewAllButton>
    </FeaturedProductsContainer>
  );
}
