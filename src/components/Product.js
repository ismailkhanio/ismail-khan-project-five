import React, { Component } from 'react';
import firebase from '../firebase';
import Title from "./Title";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      dbRef: firebase.database().ref(),
      dbCart: firebase.database().ref('cart'),
    }; 

  }

  componentDidMount() {
    // all products from firebase
    this.setProducts();
    // cart from firebase
  }

  setProducts = () => {
    // Here we create a variable that holds a reference to our database

    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      for (let key in data) {
        tempProducts.push(data[key]);
      }
    });
    this.setState({
      products: tempProducts,
    });
  };

  // handle product category states
  handleAccessories = () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.accessories) {
        tempProducts.push(data.accessories[key]);
      }
    });
    this.setState({ products: tempProducts });
  };

  handleBest = () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.best) {
        tempProducts.push(data.best[key]);
      }
    });
    this.setState({ products: tempProducts });
  };

  handleBooks = () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.books) {
        tempProducts.push(data.books[key]);
      }
    });
    this.setState({ products: tempProducts });
  };

  handleExclusives = () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.hak5) {
        tempProducts.push(data.hak5[key]);
      }
    });
    this.setState({ products: tempProducts });
  };

  handleFeatured = () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.featured) {
        tempProducts.push(data.featured[key]);
      }
    });
    this.setState({ products: tempProducts });
  };

  handleGadgets = () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.gadgets) {
        tempProducts.push(data.gadgets[key]);
      }
    });
    this.setState({ products: tempProducts });
  };

  handleHotplug = () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.hotplug) {
        tempProducts.push(data.hotplug[key]);
      }
    });
    this.setState({ products: tempProducts });
  };

  handleInternet= () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.internet) {
        tempProducts.push(data.internet[key]);
      }
    });
    this.setState({ products: tempProducts });
  };

  render() {
    return (
      <>
        <div className="categoryNav">
          <Title title="Product Catalogue"></Title>
          <p className="categoryHeading">Categories</p>
          <ul>
            <li className="productCategory" onClick={this.handleFeatured}>
              Featured
            </li>
            <li className="productCategory" onClick={this.handleBest}>
              Best Sellers
            </li>
            <li className="productCategory" onClick={this.handleExclusives}>
              Hak5 Exclusives
            </li>
            <li className="productCategory" onClick={this.handleAccessories}>
              Accessories & Apparel
            </li>
            <li className="productCategory" onClick={this.handleBooks}>
              Books & Fieldkits
            </li>
            <li className="productCategory" onClick={this.handleGadgets}>
              Gadgets
            </li>
            <li className="productCategory" onClick={this.handleHotplug}>
              Hotplug Attack Tools
            </li>
            <li className="productCategory" onClick={this.handleInternet}>
              Internet & WiFi
            </li>
          </ul>
        </div>

        <div className="gridContainer">
          {this.state.products.map((product, index) => {
            return (
              <div
                key={index}
                className="itemContainer"
              >
                <img src={product.img} alt={product.title} />

                <div className="itemTextContainer">
                  <p className="itemName">{product.title}</p>
                  <p className="itemDescription">{product.description}</p>
                  <p className="itemPrice">{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Product;