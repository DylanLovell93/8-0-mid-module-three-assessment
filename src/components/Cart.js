import { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    const { cart, formatPrice, removeFromCart } = this.props;
    const cartItems = (
      <>
        {cart.map((item, index) => (
          <li key={index} id={item.id}>
            <span>
              <button value={index} onClick={removeFromCart}>
                X
              </button>
            </span>
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
      <div className="Cart">
        <h2>Cart</h2>
        <ul>{cartItems}</ul>
        <h3>Subtotal: {formatPrice(subTotal)}</h3>
        <h3>Tax: {formatPrice(tax)}</h3>
        <h3>Total: {formatPrice(total)}</h3>
      </div>
    );
  }
}

export default Cart;
