import {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCardContainer,
} from "./ProductCard.styled";

export default function ProductCard({ image, name, price }) {
  return (
    <ProductCardContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </ProductCardContainer>
  );
}
