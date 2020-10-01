import React, { Component } from 'react';
import logo from '../logo.svg';

// THIS SHOULD BE THE HEADER
class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <div className="wrapper headerContainer">
            <div className="logoContainer">
                <img
                  src={logo}
                  alt="Mr. Robot Computer Store Logo"
                  className="logoImg"
                />
                <h1 className="logoHeading">
                  Mr. Robot <br></br>Computer Supply
                </h1>
              <p className="tagline">Leaders in happy hacking.</p>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;