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

  render() {
    return (
      <>
        <Shop products={products} />
        <Cart cart={this.state.cart} />
      </>
    );
  }
}

export default App;
