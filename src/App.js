import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BackToTop from './BackToTop.js';

class App extends Component {
  // put main app in render method
  render() {
  return (
    <div className="App">
      {/* logo, tagline, and cart icon */}
      <Header />

      {/* product category column, item grid */}
      <Main />

      {/* footer */}
      <BackToTop />
      <Footer />
    </div>
  );
  }
  
}

export default App;
