import QuantitySelector from "../../components/QuantitySelector";
import Table from "../../components/Table";
import { useCart } from "../../contexts/CartContext";
import { NAVIGATION } from "../../utils/constants";
import {
  CartContainer,
  CheckoutButton,
  CheckoutSection,
  RemoveButton,
  Thumbnail,
  TotalLabel,
  TotalPrice,
} from "./Cart.styled";

export default function Cart() {
  const { cart, addItem, removeItem } = useCart();

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleQuantityChange(id, newValue) {
    const changedItem = cart.find(({ item }) => item.id === id);
    const difference = Math.abs(changedItem.quantity - newValue);
    if (newValue < changedItem.quantity) {
      removeItem(id, difference);
    } else if (newValue > changedItem.quantity) {
      addItem(changedItem.item, difference);
    }
  }

  const cartArray = cart.map(({ item: { id, data }, quantity }) => [
    <Thumbnail src={data.mainimage.url} alt={data.name} />,
    data.name,
    formatter.format(data.price),
    <QuantitySelector
      defaultValue={quantity}
      minValue={1}
      maxValue={data.stock}
      onChange={(newValue) => handleQuantityChange(id, newValue)}
      dark
    />,
    formatter.format(data.price * quantity),
    <RemoveButton onClick={() => removeItem(id, quantity)}>X</RemoveButton>,
  ]);

  const totalPrice = cart.reduce((previous, current) => {
    return previous + current.item.data.price * current.quantity;
  }, 0);

  return (
    <CartContainer>
      <Table
        header={["Image", "Name", "Price", "Quantity", "Subtotal", ""]}
        data={cartArray}
      />
      {cart.length > 0 && (
        <CheckoutSection>
          <TotalLabel>Total:</TotalLabel>
          <TotalPrice>{formatter.format(totalPrice)}</TotalPrice>
          <CheckoutButton to={NAVIGATION.CHECKOUT}>
            Go to Checkout
          </CheckoutButton>
        </CheckoutSection>
      )}
    </CartContainer>
  );
}
