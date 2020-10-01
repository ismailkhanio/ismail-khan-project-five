import React from 'react';
import Product from './Product';

const SetProducts = props => {
  return (
    <div>
      <h1>{props.product.title}</h1>
    </div>
  );
}

export default SetProducts;