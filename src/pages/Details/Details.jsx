import { useState } from "react";
import { useParams } from "react-router";
import Gallery from "../../components/Gallery/Gallery";
import Loading from "../../components/Loading";
import { useCategories } from "../../utils/hooks/useCategories";
import { useProduct } from "../../utils/hooks/useProduct";
import {
  AccentRow,
  AddToCartButton,
  AddToCartForm,
  AddToCartInput,
  Data,
  GalleryContainer,
  Header,
  Info,
  InputButton,
  InputControls,
  InputLabel,
  InputText,
  Label,
  Price,
  ProductInformation,
  Specs,
  Title,
} from "./Details.styled";

export default function Details() {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const categoriesData = useCategories();
  const productData = useProduct(productId);

  const product = productData.isLoading || productData.data.results[0];

  let categoryNames = {};
  if (!categoriesData.isLoading) {
    categoriesData.data.results.forEach(({ id, data: { name } }) => {
      categoryNames = { ...categoryNames, [id]: name };
    });
  }

  const specs =
    productData.isLoading ||
    product.data.specs.map(({ spec_name, spec_value }, index) =>
      index % 2 === 0 ? (
        <tr key={index}>
          <td>{spec_name}</td>
          <td>{spec_value}</td>
        </tr>
      ) : (
        <AccentRow key={index}>
          <td>{spec_name}</td>
          <td>{spec_value}</td>
        </AccentRow>
      )
    );

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleQuantityChange(e) {
    let newValue = e.target.value;
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    }
    setQuantity(newValue);
  }

  return (
    <>
      {productData.isLoading || categoriesData.isLoading ? (
        <Loading />
      ) : (
        <>
          <GalleryContainer>
            <Gallery images={product.data.images} />
          </GalleryContainer>
          <ProductInformation>
            <Header>
              <Title>{product.data.name}</Title>
              <Info>{categoryNames[product.data.category.id]}</Info>
              <Info>
                <Label>Tags: </Label>
                {product.tags.join(", ")}
              </Info>
            </Header>
            <Data>
              <Label>SKU: </Label>
              {product.data.sku}
            </Data>
            <Data>{product.data.short_description}</Data>
            <Specs>
              <tbody>{specs}</tbody>
            </Specs>
            <Price>{formatter.format(product.data.price)}</Price>
            <AddToCartForm>
              <AddToCartInput>
                <InputLabel htmlFor="item_quantity">Qty.:</InputLabel>
                <InputText
                  value={quantity}
                  onChange={handleQuantityChange}
                  type="text"
                  name="item_quantity"
                  id="item_quantity"
                />
                <InputControls>
                  <InputButton onClick={() => setQuantity(quantity + 1)}>
                    +
                  </InputButton>
                  <InputButton
                    onClick={() =>
                      quantity - 1 > 0 && setQuantity(quantity - 1)
                    }
                  >
                    -
                  </InputButton>
                </InputControls>
              </AddToCartInput>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </AddToCartForm>
          </ProductInformation>
        </>
      )}
    </>
  );
}
