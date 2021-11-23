import {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCardContainer,
} from "./ProductCard.styled";

export default function ProductCard({ image, name, price }) {
  let formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <ProductCardContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{formatter.format(price)}</ProductPrice>
    </ProductCardContainer>
  );
}
