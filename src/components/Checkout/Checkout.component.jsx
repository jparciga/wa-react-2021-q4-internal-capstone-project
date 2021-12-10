import React from "react";
import { Link } from "react-router-dom";

const CheckoutComponent = ({ className }) => {

    const handleOnSubmit = () => {
        alert('haha');
    };


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
                <tr>
                <td>Sofa</td>
                <td>1</td>
                <td>$417</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td>Total:</td>
                <td>$417</td>
                </tr>
            </tfoot>
            </table>

            <div className="checkout-actions">
            <Link to="/cart"><button>Go back</button></Link>
            <button type="submit">Place Order</button>
            </div>
        
        </div>
    </form>
  );
};

export default CheckoutComponent;
