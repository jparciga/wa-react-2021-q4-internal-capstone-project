import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import {
  AddToCartButton,
  AddToCartContainer,
  AddToCartInput,
  InputButton,
  InputControls,
  InputLabel,
  InputText,
} from "./AddToCartForm.styled";

export default function AddToCartForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { cart, addItem } = useCart();

  function handleQuantityChange(e) {
    let newValue = e.target.value;
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    }
    setQuantity(parseInt(newValue));
  }

  const cartItem = cart.find(({ item }) => item.id === product.id);
  const disabledButton = cartItem?.quantity >= cartItem?.item.data.stock;

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
      <AddToCartButton
        disabled={disabledButton}
        onClick={() => addItem(product, quantity)}
      >
        Add to Cart
      </AddToCartButton>
    </AddToCartContainer>
  );
}
