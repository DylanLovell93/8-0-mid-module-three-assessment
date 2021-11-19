import { Component } from 'react';
import formData from '../data/formData';

class Checkout extends Component {
  render() {
    const { buyNow } = this.props;
    const submitButton = <button type="submit">Buy Now</button>;
    const formItems = (
      <>
        {formData.map((element, index) => (
          <p key={'input' + index}>
            <label>
              {element.title}
              <br />
              <input
                type={element.type}
                name={element.id}
                id={element.id}
              ></input>
            </label>
          </p>
        ))}
      </>
    );
    return (
      <form id={'checkout'} onSubmit={buyNow}>
        <h2> Checkout </h2>
        {formItems}
        {submitButton}
      </form>
    );
  }
}

export default Checkout;
