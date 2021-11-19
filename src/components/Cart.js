import { Component } from 'react';
import formatPrice from '../helpers/formatPrice';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    const cartItems = (
      <>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name}: {formatPrice(item.price)}
          </li>
        ))}
      </>
    );

    const subTotal =
      cart.reduce((acc, val) => Number(acc) + Number(val.price), 0) || 0;

    const tax = subTotal / 20 || 0;

    const total = subTotal + tax || 0;

    return (
      <>
        <ul>
          <h2>Cart</h2>
          {cartItems}
        </ul>
        <h3>Subtotal: {formatPrice(subTotal)}</h3>
        <h3>Tax: {formatPrice(tax)}</h3>
        <h3>Total: {formatPrice(total)}</h3>
      </>
    );
  }
}

export default Cart;
