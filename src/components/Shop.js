import { Component } from 'react';

class Shop extends Component {
  render() {
    const { products, addToCart, formatPrice } = this.props;
    const shopTitle = 'My Garage Sale';
    const productItems = (
      <>
        {products.map((item, index) => (
          <div key={'p' + index}>
            <h3>{item.name}</h3>
            <p>Price: {formatPrice(item.price)}</p>
            <p>
              <button type="submit" onClick={addToCart} value={item.id}>
                Add To Cart
              </button>
            </p>
            <img src={item.img} alt={'Image of ' + item.name} />
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
