import { createContext, useReducer, useEffect, useRef } from 'react';
const ACTIONS = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  DELETE: 'DELETE',
};

const reducer = (cart, actions) => {
  switch (actions.type) {
    case ACTIONS.ADD:
      return [...cart, actions.product];
    case ACTIONS.EDIT:
      console.log('entra edit');
      return [...cart].map((product) => {
        if (product.id === actions.product.id) {
          return { ...product, quantity: actions.product.quantity };
        }
        return product;
      });

    case ACTIONS.DELETE:
      let newCart = cart.filter((product) => product.id !== actions.productId);
      return newCart;
    case ACTIONS.INCREASE:
      return [...cart].map((product) => {
        if (product.id === actions.productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    case ACTIONS.DECREASE:
      return [...cart].map((product) => {
        if (product.id === actions.productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

    default:
      return cart;
  }
};

const initializer = (key) => {
  if (!localStorage.getItem(key)) return [];
  return JSON.parse(localStorage.getItem(key));
};

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const isMounted = useRef(null);
  const [cart, dispatchCart] = useReducer(reducer, initializer('cart'));

  useEffect(() => {
    isMounted.current = true;

    if (isMounted.current) localStorage.setItem('cart', JSON.stringify(cart));
    return () => (isMounted.current = false);
  }, [cart]);

  const addProduct = (product, quantity) => {
    const newProduct = {
      id: product.id,
      name: product.data.name,
      price: product.data.price,
      image: product.data.mainimage.url,
      stock: product.data.stock,
      quantity: quantity,
    };
    const productInCart = cart.find((prod) => prod.id === product.id);

    const productObject = {
      type: ACTIONS.ADD,
      product: newProduct,
    };
    if (productInCart) productObject.type = ACTIONS.EDIT;

    dispatchCart(productObject);
  };
  const increase = (productId) => {
    const productObject = {
      type: ACTIONS.INCREASE,
      productId,
    };
    dispatchCart(productObject);
  };
  const decrease = (productId) => {
    const productObject = {
      type: ACTIONS.DECREASE,
      productId,
    };
    dispatchCart(productObject);
  };

  const removeProduct = (productId) => {
    const productObject = {
      type: ACTIONS.DELETE,
      productId,
    };
    dispatchCart(productObject);
  };

  const context = {
    addProduct: addProduct,
    productQuantity: cart.length,
    cart: cart,
    removeProduct: removeProduct,
    increase: increase,
    decrease: decrease,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
export default CartContext;
