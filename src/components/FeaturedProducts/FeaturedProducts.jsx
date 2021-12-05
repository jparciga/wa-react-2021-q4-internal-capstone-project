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

  const productsList = products
    .filter(
      ({ typeId }) =>
        activeCategoryId === typeId || activeCategoryId === ALL_CATEGORY_ID
    )
    .map(({ id, image, typeId, name, price }) => (
      <ProductCard
        key={id}
        productId={id}
        image={image}
        category={categoryNames[typeId]}
        name={name}
        price={price}
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
