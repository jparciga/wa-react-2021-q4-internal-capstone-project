import {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCardContainer,
  ProductCategory,
} from "./ProductCard.styled";

export default function ProductCard({ image, name, price, category }) {
  let formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <ProductCardContainer>
      <ProductImage src={image} alt={name} />
      <ProductCategory>{category}</ProductCategory>
      <ProductName>{name}</ProductName>
      <ProductPrice>{formatter.format(price)}</ProductPrice>
    </ProductCardContainer>
  );
}
