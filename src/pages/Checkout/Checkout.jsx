import Table from "../../components/Table";
import { useCart } from "../../contexts/CartContext";
import { NAVIGATION, PRICE_FORMATTER } from "../../utils/constants";
import {
  Button,
  ButtonSecition,
  Container,
  LinkButton,
  TableForm,
  TotalLabel,
  TotalPrice,
  TotalSection,
  ZipCodeInput,
} from "./Checkout.syled";

export default function Checkout() {
  const { cart } = useCart();

  function handleSubmit(e) {
    e.preventDefault();
    const inputs = e.target.elements;
    console.log(`Name: ${inputs.name.value}`);
    console.log(`Email: ${inputs.email.value}`);
    console.log(`ZIP Code: ${inputs.zipcode.value}`);
    console.log(`Notes: ${inputs.notes.value}`);
  }

  const cartSummary = cart.map(({ item, quantity }) => [
    item.data.name,
    `x${quantity}`,
    PRICE_FORMATTER.format(item.data.price * quantity),
  ]);

  const totalPrice = cart.reduce((previous, current) => {
    return previous + current.item.data.price * current.quantity;
  }, 0);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TableForm>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input type="text" id="name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input type="text" id="email" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="zipcode">ZIP Code</label>
              </td>
              <td>
                <ZipCodeInput type="text" id="zipcode" maxLength="5" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="notes">Notes</label>
              </td>
              <td>
                <textarea
                  name="notes"
                  id="notes"
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </TableForm>
        <Table data={cartSummary} />
        <TotalSection>
          <TotalLabel>Total:</TotalLabel>
          <TotalPrice>{PRICE_FORMATTER.format(totalPrice)}</TotalPrice>
        </TotalSection>
        <ButtonSecition>
          <LinkButton to={NAVIGATION.CART}>Go Back</LinkButton>
          <Button type="submit">Checkout</Button>
        </ButtonSecition>
      </form>
    </Container>
  );
}
