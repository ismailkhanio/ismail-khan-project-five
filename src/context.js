import React, { Component } from 'react';
import firebase from "firebase/app";
// context api to keep data originating from one source while preventing too many props
// create context object for products and buyers
const ProductContext = React.createContext();

class ProductProvider extends Component {
  // I put all the state stuff in product.js
  
  render() {
    // return context and product output from firebase
    return (
      // this will sit ontop of app.js in order to access the entire app. Need to use .children prop method to acces children.
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

