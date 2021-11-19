import { Component } from 'react';
import formatPrice from '../helpers/formatPrice';

class Cart extends Component {
  render() {
    const { cart } = this.props.state;
    const cartItems = (
      <>
        cart.map((item, index) => (
        <li key={index}>
          {item.name}: {formatPrice(item.price)}
        </li>
        ))
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
        <p>Subtotal: {formatPrice(subTotal)}</p>
        <p>Tax: {formatPrice(tax)}</p>
        <p>Total: {formatPrice(total)}</p>
      </>
    );
  }
}

export default Cart;
