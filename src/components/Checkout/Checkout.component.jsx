import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {checkoutActionCreators} from 'state/index'
import {bindActionCreators} from 'redux'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import PropTypes from 'prop-types'

//checkout data:
// const checkoutDataModel = {
//     orderSummary: [{ name, quantity, subtotal }, ...]
//     total
// };

const CheckoutComponent = ({className}) => {
  const {orderSummary, total} = useSelector(state => state.checkout)
  const dispatch = useDispatch()
  const {clearCheckoutSummary} = bindActionCreators(
    checkoutActionCreators,
    dispatch,
  )

  const history = useHistory()

  const handleOnSubmit = () => {
    history.push('/home')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className={className}>
        <div className="checkout-customerdata">
          <label htmlFor="name">Customer Name:</label>
          <input name="name" type="text"></input>
          <label htmlFor="email">E-mail</label>
          <input name="email" type="text"></input>
          <label htmlFor="zipCode">Zip Code</label>
          <input name="zipCode" type="text"></input>
          <label htmlFor="orderNotes">Order Notes</label>
          <textarea name="orderNotes" rows="4" cols="50"></textarea>
        </div>

        <table>
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {orderSummary.map(({name, quantity, subtotal}) => (
              <tr key={name - subtotal}>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${subtotal}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total: ${total}</td>
            </tr>
          </tfoot>
        </table>

        <div className="checkout-actions">
          <Link to="/cart">
            <button onClick={clearCheckoutSummary}>Go back</button>
          </Link>
          <button type="submit">Place Order</button>
        </div>
      </div>
    </form>
  )
}

CheckoutComponent.propTypes = {
  className: PropTypes.string,
}

export default CheckoutComponent
