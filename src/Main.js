import React, { Component } from 'react';
import ItemContainer from './ItemContainer.js'

class Main extends Component {
  render() {
    return (
      <main className="wrapper">
        <div className="categoryCol">
          <p>Categories</p>
          <ul>
            <li className="productCategory">Penetration Testing</li>
            <li className="productCategory">Category 2</li>
            <li className="productCategory">Category 3</li>
          </ul>
        </div>

        <div className="itemGridcCol">
          <div className="gridContainer">
            <ItemContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Main;