import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// components folder
import Header from "./components/Header";
import ProductInventory from './components/ProductInventory';
import Footer from './components/Footer';

class App extends Component {
  // put main app in render method
  render() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        {/* logo, tagline, and cart icon */}
        <Header />
        <ProductInventory />
        {/* footer */}
        <Footer />
      </div>
    </Router>
  );
  }
  
}

export default App;
