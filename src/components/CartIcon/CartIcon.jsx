import CartSVG from "../../images/cart.svg";
import { CartIconContainer } from "./CartIcon.styled";

export default function CartIcon() {
  return (
    <CartIconContainer>
      <img src={CartSVG} alt="Cart" />
      <span id="badge">{"2"}</span>
    </CartIconContainer>
  );
}
