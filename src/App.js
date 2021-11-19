import { Component } from 'react';
import './App.css';
import formatPrice from './helpers/formatPrice.js';
import products from './data/productData.js';
import Shop from './components/Shop';
import Cart from './components/Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (event) => {
    const { cart } = this.state;
    const item = products.find((element) => element.id === event.target.id);
    this.setState({
      cart: [...cart, item],
    });
  };

  render() {
    return (
      <>
        <Shop
          products={products}
          addToCart={this.addToCart}
          formatPrice={formatPrice}
        />
        <Cart cart={this.state.cart} formatPrice={formatPrice} />
      </>
    );
  }
}

export default App;
