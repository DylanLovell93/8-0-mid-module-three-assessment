import { Component } from 'react';
import './App.css';
import formatPrice from './helpers/formatPrice';
import products from './data/productData';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (event) => {
    const { cart } = this.state;
    const item = products.find((element) => element.id === event.target.value);
    this.setState({
      cart: [...cart, item],
    });
  };

  buyNow = (event) => {
    const { firstName, lastName, email, creditCard, zipCode } = event.target;
    switch (true) {
      case firstName:
    }
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
        <Checkout />
      </>
    );
  }
}

export default App;
