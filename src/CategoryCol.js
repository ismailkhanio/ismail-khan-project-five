import React, { Component } from "react";

class CategoryCol extends Component {
  render() {
    return (
      <div className="categoryCol">
          <p className="categoryHeading">Categories</p>
          <ul>
            <li className="productCategory">Penetration Testing</li>
            <li className="productCategory">Category 2</li>
            <li className="productCategory">Category 3</li>
          </ul>
        </div>
    );
  }
}

export default CategoryCol;
