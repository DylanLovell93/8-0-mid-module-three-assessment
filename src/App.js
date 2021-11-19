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
      products: products,
    };
  }

  addToCart = (event) => {
    const { cart } = this.state;
    const item = products.find((element) => element.id === event.target.value);
    this.setState({
      cart: [...cart, item],
    });
  };

  removeFromCart = (event) => {
    const { cart } = this.state;
    const targetIndex = Number(event.target.value);
    this.setState({
      cart: cart.filter((element, index) => index !== targetIndex),
    });
  };

  sortProducts = (event) => {
    const value = event.target.value;
    switch (value) {
      case '':
        this.setState({
          products: products,
        });
        break;
      case 'lowHigh':
        this.setState({
          products: products.sort((a, b) => Number(a.price) - Number(b.price)),
        });
        break;
      case 'highLow':
        this.setState({
          products: products.sort((a, b) => Number(b.price) - Number(a.price)),
        });
        break;
      case 'aZ':
        this.setState({
          products: products.sort((a, b) => (a.name > b.name ? 1 : -1)),
        });
        break;
      case 'zA':
        this.setState({
          products: products.sort((a, b) => (a.name < b.name ? 1 : -1)),
        });
        break;
    }
  };

  buyNow = (event) => {
    event.preventDefault();
    const { cart } = this.state;
    const total = formatPrice(
      cart.reduce((acc, val) => Number(acc) + Number(val.price), 0) * 1.05
    );
    const { firstName, lastName, email, creditCard, zipCode } = event.target;
    switch (true) {
      case !firstName.value:
        alert('Input is not valid, please provide a First Name');
        break;
      case !lastName.value:
        alert('Input is not valid, please provide a Last Name');
        break;
      case !email.value:
        alert('Input is not valid, please provide an Email');
        break;
      case !creditCard.value:
        alert('Input is not valid, please provide a Credit Card Number');
        break;
      case !zipCode.value:
        alert('Input is not valid, please provide a Zip Code');
        break;
      case creditCard.value.length !== 16:
        alert('Input is not valid, Credit card number is not valid');
        break;
      case zipCode.value.length !== 5:
        alert('Input is not valid, Zip code is not valid');
        break;
      default:
        alert('Purchase complete! Your total is' + total);
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <Shop
          products={this.state.products}
          addToCart={this.addToCart}
          formatPrice={formatPrice}
        />
        <aside>
          <Cart
            cart={this.state.cart}
            formatPrice={formatPrice}
            removeFromCart={this.removeFromCart}
          />
          <Checkout buyNow={this.buyNow} />
        </aside>
      </div>
    );
  }
}

export default App;
