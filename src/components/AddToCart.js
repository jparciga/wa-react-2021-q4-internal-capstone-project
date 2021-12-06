import { useContext } from 'react';
import { AddToCartButton } from './AddToCart.styles.js';
import useAddToCart from '../utils/hooks/useAddToCart.js';
import CartContext from '../context/CartContext';
import QuantitySelector from './QuantitySelector.js';
const AddToCart = ({ product, maxQuantity = 1 }) => {
  const { addProduct } = useContext(CartContext);

  const [reduceHandler, increaseHandler, quantity] = useAddToCart();

  return (
    <>
      <QuantitySelector
        reduceHandler={reduceHandler}
        increaseHandler={increaseHandler}
        quantity={quantity}
        maxQuantity={maxQuantity}
        minQuantity={1}
      />
      <AddToCartButton onClick={() => addProduct(product, quantity)}>
        Add to Cart
      </AddToCartButton>
    </>
  );
};

export default AddToCart;
