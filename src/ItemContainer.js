import React, { Component } from "react";
// import firebase
import firebase from "firebase/app";
import { db, dbRef } from "./firebase.js"


class ItemContainer extends Component {
  constructor() {
    super();
    // reference firebase db
    // set products array to empty
    this.state = {
      db: firebase.database(),
      dbRef: firebase.database().ref(),
      products: [],
      
    };
  }

  // lifecycle
  componentDidMount = () => {
    // ensures everything is intially rendered
    let tempProducts = [];

    // render wireless products
    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data) {
        tempProducts.push(data[key]);
      }
    });
    this.setState({ products: tempProducts });
  }

  // handle all product categories states
  
  handleAccessories = () => {
    let tempProducts = [];

    this.state.dbRef.on("value", (snapshot) => {
      const data = snapshot.val();

      for (let key in data.accessories) {
        tempProducts.push(data.accessories[key]);
      }
      console.log(tempProducts);
    });
    this.setState({ products: tempProducts });
  }
  
  // loop through all product categories added in firebase
  // push all items from product categories into an an empty array (not products in state)
  // make sure each product has its own key
  // push all those items into the empty array
  // use setState to to make products array equal to the above array

  // create functions for each product category that handles when each category is clicked so that it fills the item grid with the product in the clicked category from firebase
  // probably need to make this in the categoryCol component as function components
  // set logic to empty the array on click and change the state to an empty array
  // codealong help from freecodecamp ecommerce react app
  // https://youtu.be/wPQ1-33teR4?t=9366

  render() {
    return (
      <>
        <div className="categoryCol">
          <p className="categoryHeading">Categories</p>
          <ul>
            <li className="productCategory">Best Sellers</li>
            <li
              className="productCategory"
              onClick={this.handleWireless}
            >
              Wireless Pen Testing
            </li>
            <li className="productCategory">Hotplug Attack Tools</li>
          </ul>
        </div>
          
        {this.state.products.map((product, index) => {
          return (
            <div key={index} className="itemContainer">
              <img src={product.img} alt={product.name} />

              <div className="itemTextContainer">
                <p className="itemName">{product.title}</p>
                <p className="itemDescription">{product.description}</p>
                <p className="itemPrice">{product.price}</p>
                <button className="addCartBtn">
                  <i className="fas fa-cart-plus"></i>Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default ItemContainer;