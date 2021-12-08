import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartSVG from "../../images/cart.svg";
import { CartIconContainer } from "./CartIcon.styled";

export default function CartIcon() {
  const { cart } = useContext(CartContext);

  return (
    <CartIconContainer>
      <img src={CartSVG} alt="Cart" />
      {cart.length === 0 || (
        <span id="badge">{cart.length < 100 ? cart.length : "99+"}</span>
      )}
    </CartIconContainer>
  );
}
