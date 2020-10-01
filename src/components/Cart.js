import React, { Component } from 'react';
import firebase from '../firebase';

class Cart extends Component {

  constructor(){
    super();
    this.state = {
      dbRef: firebase.database().ref(),
      dbCart: firebase.database().ref("cart"),
    }
  }
  


  render() {

    return(
      <div className="wrapper">
        <div className="cartDisplay"></div>
      </div>

    )
  }
}

export default Cart;