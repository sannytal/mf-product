import React from 'react';
import ProductDetails from './ProductDetails';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      product: null,
    };
  }

  render() {

    return <ProductDetails />;
  }
}

export default Product;
