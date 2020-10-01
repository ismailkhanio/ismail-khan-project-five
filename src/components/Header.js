import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

// THIS SHOULD BE THE HEADER
class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <div className="wrapper headerContainer">
            <div className="logoContainer">
              <Link to="/" className="logoLink">
                <img
                  src={logo}
                  alt="Mr. Robot Computer Store Logo"
                  className="logoImg"
                />
                <h1 className="logoHeading">
                  Mr. Robot <br></br>Computer Supply
                </h1>
              </Link>
              <p className="tagline">Leaders in happy hacking.</p>
            </div>

            <ul>
              <li>
                <Link to="/">
                  <button className="headerBtn headerProduct">Products</button>
                </Link>
              </li>
            </ul>

            <Link to="/cart">
              <button className="headerBtn cartBtn">
                <i className="fas fa-shopping-cart"></i>
                Cart
              </button>
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;