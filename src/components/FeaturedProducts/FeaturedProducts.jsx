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

export default function FeaturedProducts({
  title,
  categories,
  products,
  firstActiveCategoryId = "*",
}) {
  const [activeCategoryId, setActiveCategoryId] = useState(
    firstActiveCategoryId
  );

  const categoryControlList = [{ id: "*", name: "All" }, ...categories];

  const categoryControls = categoryControlList.map((category) => {
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

  let categoryNames = {};
  categories.forEach(({ id, name }) => {
    categoryNames = { ...categoryNames, [id]: name };
  });

  const productsList = products
    .filter(
      ({ typeId }) => typeId === activeCategoryId || activeCategoryId === "*"
    )
    .map((product, index) => (
      <ProductCard
        key={`product${index}`}
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
