import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="wrapper">
        <div className="logoContainer">
          <h1 className="logoHeading">Mr. Robot Computer Supply</h1>
          <p className="tagline">For all your happy hacking needs</p>
        </div>
        <div className="cartContainer">
          <i class="fas fa-shopping-cart"></i>
          <p className="cartNum">0</p>
        </div>  
      </header>
    )
  }
}

export default Header;