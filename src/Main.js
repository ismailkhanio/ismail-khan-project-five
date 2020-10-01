import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main className="wrapper">
        {/* product category column */}

        <div className="itemGridCol">
    
          <div className="gridContainer">
            <ItemContainer />
          </div>
        </div>
      </main>
    );
  } 
}

export default Main;