import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import CategoryNav from './CategoryNav';
import { ProductConsumer } from '../context';
import { Link } from "react-router-dom";

// same as PRODUCTLIST
class ProductInventory extends Component {
  
  render() {
    return (
      <>
        <main>
          <div className="wrapper">
            <div className="itemGridCol">
              <Product />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default ProductInventory;