import { Component } from 'react';
import './App.css';
import formatPrice from './helpers/formatPrice.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  render() {
    return <h1>Hello, world!</h1>;
  }
}

export default App;
