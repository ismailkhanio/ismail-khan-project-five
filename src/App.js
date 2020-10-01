import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import firebase from "./firebase";

// components folder
import Header from "./components/Header";
import ProductInventory from './components/ProductInventory';
import PageNotFound from "./components/PageNotFound";
import Details from './components/Details';
import Cart from './components/Cart';
import Footer from './Footer.js';

class App extends Component {
  // put main app in render method
  render() {
  return (
    <div className="App">
      {/* logo, tagline, and cart icon */}
      <Header />

      <Switch>
        <Route path="/details" component={Details} ></Route>
        <Route path="/cart" component={Cart} ></Route>
        <Route exact path="/" component={ProductInventory} ></Route>
        <Route component={PageNotFound} ></Route>
      </Switch>

      {/* product category column, item grid */}
      {/* <Main /> */}
      <Cart />
      {/* footer */}
      {/* <BackToTop /> */}
      <Footer />
    </div>
  );
  }
  
}

export default App;
