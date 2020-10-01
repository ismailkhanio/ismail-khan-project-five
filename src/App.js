import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

// components folder
import Header from "./components/Header";
import ProductInventory from './components/ProductInventory';
import Footer from './components/Footer';

class App extends Component {
  // put main app in render method
  render() {
  return (
    <div className="App">
      {/* logo, tagline, and cart icon */}
      <Header />

      <Switch>
        <Route exact path="/" component={ProductInventory} ></Route>
      </Switch>

      {/* footer */}
      <Footer />
    </div>
  );
  }
  
}

export default App;
