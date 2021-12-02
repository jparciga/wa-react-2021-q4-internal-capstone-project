import { useState } from "react";
import {
  AddToCartButton,
  AddToCartContainer,
  AddToCartInput,
  InputButton,
  InputControls,
  InputLabel,
  InputText,
} from "./AddToCartForm.styled";

export default function AddToCartForm() {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(e) {
    let newValue = e.target.value;
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    }
    setQuantity(parseInt(newValue));
  }

  return (
    <AddToCartContainer>
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
          <InputButton onClick={() => setQuantity(parseInt(quantity) + 1)}>
            +
          </InputButton>
          <InputButton
            onClick={() =>
              quantity - 1 > 0 && setQuantity(parseInt(quantity) - 1)
            }
          >
            -
          </InputButton>
        </InputControls>
      </AddToCartInput>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </AddToCartContainer>
  );
}
