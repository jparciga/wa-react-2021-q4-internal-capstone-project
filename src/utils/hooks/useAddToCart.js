import { useState } from 'react';

const useAddToCart = (initialQuantity = 1) => {
  const [quantity, setquantity] = useState(initialQuantity);

  const reduceHandler = () => {
    if (quantity > 1) setquantity((prevQuantity) => prevQuantity - 1);
  };
  const increaseHandler = () => {
    setquantity((prevQuantity) => prevQuantity + 1);
  };
  return [reduceHandler, increaseHandler, quantity];
};
export default useAddToCart;
