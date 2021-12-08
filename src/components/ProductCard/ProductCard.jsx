import { useCart } from "../../contexts/CartContext";
import { NAVIGATION } from "../../utils/constants";
import {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCategory,
  AddToCart,
  ProductInfo,
  ProductContent,
  ContentLeft,
  ContentRight,
} from "./ProductCard.styled";

export default function ProductCard({ product, category, large = false }) {
  const { addItem } = useCart();
  const { id, data } = product;

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <ProductContent to={`${NAVIGATION.SHOP}/${id}`}>
        <ContentLeft>
          <ProductImage src={data.mainimage.url} alt={data.name} />
          <ProductInfo>
            <ProductCategory>{category}</ProductCategory>
            <ProductName>{data.name}</ProductName>
            <ProductPrice>{formatter.format(data.price)}</ProductPrice>
          </ProductInfo>
        </ContentLeft>
        {large && <ContentRight>{data.short_description}</ContentRight>}
      </ProductContent>
      <AddToCart onClick={() => addItem(product, 1)}>Add to Cart</AddToCart>
    </div>
  );
}
