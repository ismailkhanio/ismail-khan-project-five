import React, { Component } from 'react';
import ItemContainer from './ItemContainer.js'
import CategoryCol from './CategoryCol.js'
import ItemGridMenu from './ItemGridMenu.js'

class Main extends Component {
  render() {
    return (
      <main className="wrapper">
        {/* product category column */}
        <CategoryCol />

        <div className="itemGridCol">
          <ItemGridMenu />
    
          <div className="gridContainer">
            <ItemContainer />
          </div>
        </div>
      </main>
    );
  } 
}

export default Main;