import { useContext } from 'react';
import { InputText } from './CheckoutPage.styles';
import { Button } from '../utils/main.styles';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <>
      <div>
        Name
        <InputText />
        Email
        <InputText />
        post/zip
        <InputText />
        Order Notes<textarea></textarea>
      </div>

      {cart.map((product) => {
        return (
          <div key={product.id}>
            <div>
              <img
                style={{ width: '120px' }}
                src={product.image}
                alt={product.name}
              />
            </div>
            <div>{product.name} </div>
            <div>{product.quantity}</div>
            <div> $ {` ${product.price.toFixed(2)}`} </div>
          </div>
        );
      })}

      <div>
        <Button className={'success'}> Place order </Button>
        <Button onClick={() => navigate('/cart')}> Go back to cart </Button>
      </div>
    </>

    /**
     * Agregar tabla con
     * Nombre de producto,
     * Numero de items,
     * Subtota (unit price x quantity),
     * Al final de la tabla un label con el total del carrito
     *
     * Agregar dos botones al final, uno para "Place Order"
     * y el otro "Go back to cart"
     *
     */
  );
};

export default CheckoutPage;
