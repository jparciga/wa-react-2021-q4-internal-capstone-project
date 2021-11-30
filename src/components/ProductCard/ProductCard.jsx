import {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCategory,
  AddToCart,
  ProductInfo,
  ProductContent,
} from "./ProductCard.styled";

export default function ProductCard({ image, name, price, category }) {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <ProductContent>
        <ProductImage src={image} alt={name} />
        <ProductInfo>
          <ProductCategory>{category}</ProductCategory>
          <ProductName>{name}</ProductName>
          <ProductPrice>{formatter.format(price)}</ProductPrice>
        </ProductInfo>
      </ProductContent>
      <AddToCart>Add to Cart</AddToCart>
    </div>
  );
}
