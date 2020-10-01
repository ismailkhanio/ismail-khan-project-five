import React, { Component } from 'react';
import CategoryNav from './CategoryNav';
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import SetProducts from './SetProducts';
import Product from './Product';
import firebase from "firebase/app";


class Details extends Component {
  constructor() {
    super();
    this.state = {
      dbRef: firebase.database().ref(),
      products: [],
    };
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    // Here we create a variable that holds a reference to our database
    const dbRef = firebase.database().ref();

    let products = [];
    let tempProducts = [];

    dbRef.on("value", (response) => {
      const data = response.val();
      for (let key in data) {
        tempProducts.push(data[key]);
      }

      tempProducts.forEach((item) => {
        let products = [];
        const singleItem = { ...item };
        products = [...products, singleItem];
        // console.log(products, singleItem.inCart);
      });
    });
    this.setState({
      products: tempProducts,
    });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="itemGridCol">
            <CategoryNav />

            <h2>WELCOME TO DETAILS</h2>
            <button
              onClick={()=> {
                // value.addToCart(id);
              }}
            >
              
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Details;