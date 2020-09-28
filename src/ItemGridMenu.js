import React, { Component } from "react";

class ItemGridMenu extends Component {
  render() {
    return (
      <div className="itemGridMenu">
        {/* display results counter */}
        <p className="productResults"> <span>4</span> products found</p>

        {/* on sale checkbox */}
        <input type="checkbox" name="onSale" id="onSale" className="onSaleCheck"/>
        <label htmlFor="onSale">On Sale</label>
      </div>
    );
  }
}

export default ItemGridMenu;
