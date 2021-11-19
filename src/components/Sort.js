import { Component } from 'react';
import sortData from '../data/sortData';

class Sort extends Component {
  render() {
    const { sortProducts } = this.props;
    const options = sortData.map((option, index) => (
      <option key={'o' + index} value={option.value}>
        {option.title}
      </option>
    ));
    return (
      <form>
        <label>
          <h4>Sort Items</h4>
          <select onChange={sortProducts}>{options}</select>
        </label>
      </form>
    );
  }
}

export default Sort;
