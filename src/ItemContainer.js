import React, { Component } from "react";

class ItemContainer extends Component {
  render() {
    return(
      <div className="itemContainer">
        <img src="https://cdn.shopify.com/s/files/1/0068/2142/products/bashbunny_2_800x.png?v=1590785034" alt="" />
        <p>product A</p>
        <p>$40.99</p>
      </div>
    )
  }
}

export default ItemContainer;