import styled from 'styled-components'
import CheckoutComponent from './Checkout.component'

const Checkout = styled(CheckoutComponent)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 2em;
  gap: 2em;

  .checkout-customerdata {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  table {
    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
  }
`

export default Checkout
