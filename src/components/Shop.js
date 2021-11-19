import { Component } from 'react';
import formatPrice from '../helpers/formatPrice';

class Shop extends Component {
  render() {
    const { products, addToCart } = this.props;
    const shopTitle = 'My Garage Sale';
    const productItems = (
      <>
        {products.map((item, index) => (
          <div key={'p' + index}>
            <h3>{item.name}</h3>
            <p>Price: {formatPrice(item.price)}</p>
            <p>
              <button OnClick={addToCart}>Add To Cart</button>
            </p>
            <img src={item.img} />
            <p>{item.description}</p>
          </div>
        ))}
      </>
    );
    return (
      <div>
        <h2>{shopTitle}</h2>
        <div className="products">{productItems}</div>
      </div>
    );
  }
}

export default Shop;