import React, { Component } from 'react';
import Title from './Title';

class CategoryNav extends Component {
  render() {
    return (
      <>
        {/* Product Category Column */}

        <div className="categoryNav">
          <Title title="Product Catalogue"></Title>
          <p className="categoryHeading">Categories</p>
          <ul>
            <li className="productCategory">Best Sellers</li>
            <li className="productCategory" onClick={this.handleWireless}>
              Wireless Pen Testing
            </li>
            <li className="productCategory">Hotplug Attack Tools</li>
          </ul>
        </div>
      </>
    );
  }
}

export default CategoryNav;