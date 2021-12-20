import {useDispatch, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {shoppingCartActionCreators} from 'state/index'
import PropTypes from 'prop-types'

const ShoppingCartCardComponent = ({
  className,
  data: {id, name, url, price, stock},
}) => {
  const {items} = useSelector(state => state.shoppingCart)
  const {quantity} = items.find(item => item.id === id) || {quantity: 0}

  const dispatch = useDispatch()
  const {removeFromCart, changeQuantity} = bindActionCreators(
    shoppingCartActionCreators,
    dispatch,
  )

  const quantityOptions = Array.from(Array(stock).keys())

  const handleQuantityonInput = e => {
    changeQuantity(id, parseInt(e.target.value))
  }

  return (
    <div data-testid="shopping-cart-card" className={className}>
      <img src={url} alt="althaha"></img>
      <span>{name}</span>
      <span>Price: ${price}</span>
      <span>
        Qty:
        <select defaultValue={quantity} onInput={handleQuantityonInput}>
          {quantityOptions.map(num => {
            return (
              <option key={id + num} value={num + 1}>
                {num + 1}
              </option>
            )
          })}
        </select>
      </span>
      <div>Subtotal: ${price * quantity}</div>
      <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
    </div>
  )
}

ShoppingCartCardComponent.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
  }),
}

export default ShoppingCartCardComponent
