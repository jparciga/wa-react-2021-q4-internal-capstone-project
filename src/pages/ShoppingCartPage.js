import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import {
  ShoppingCartContent,
  TableProducts,
  TableResume,
  Flex1,
  DeleteButton,
  ProductsRow,
  RowElement,
  ShoppingCartTitle,
} from './ShoppingCartPage.styles';
import QuantitySelector from '../components/QuantitySelector';
import { Button } from '../utils/main.styles';
import { TiDeleteOutline } from 'react-icons/ti';
const ShoppingCartPage = () => {
  const navigate = useNavigate();

  const { cart, removeProduct, increase, decrease } = useContext(CartContext);

  const total = (
    cart.length > 0
      ? cart.reduce((prev, next) => {
          return prev + next.price * next.quantity;
        }, 0)
      : 0
  ).toFixed(2);

  return (
    <>
      <ShoppingCartTitle>Shopping Cart </ShoppingCartTitle>
      <ShoppingCartContent>
        <Flex1>&nbsp;</Flex1>
        <TableProducts>
          <ProductsRow>
            <RowElement>&nbsp;</RowElement>
            <RowElement>&nbsp;</RowElement>
            <RowElement>Name</RowElement>
            <RowElement>Quantity</RowElement>
            <RowElement>Price</RowElement>
          </ProductsRow>

          {cart.map((product) => {
            return (
              <ProductsRow key={product.id}>
                <RowElement>
                  <DeleteButton
                    onClick={() => {
                      removeProduct(product.id);
                    }}
                  >
                    <TiDeleteOutline />
                  </DeleteButton>
                </RowElement>
                <RowElement>
                  <img
                    style={{ width: '120px' }}
                    src={product.image}
                    alt={product.name}
                  />
                </RowElement>
                <RowElement>{product.name} </RowElement>
                <RowElement>
                  <QuantitySelector
                    reduceHandler={() => decrease(product.id)}
                    increaseHandler={() => increase(product.id)}
                    quantity={product.quantity}
                    maxQuantity={product.stock}
                    minQuantity={1}
                  />
                </RowElement>
                <RowElement> $ {` ${product.price.toFixed(2)}`} </RowElement>
              </ProductsRow>
            );
          })}
        </TableProducts>

        <TableResume>
          {` CART TOTAL : $ ${total} `}
          <Button
            onClick={() => {
              navigate('/products');
            }}
          >
            Go to products
          </Button>
          <Button
            className="success"
            onClick={() => {
              navigate('/checkout');
            }}
          >
            Proceed to checkout
          </Button>
        </TableResume>
        <Flex1>&nbsp;</Flex1>
      </ShoppingCartContent>
    </>
  );
};

export default ShoppingCartPage;
