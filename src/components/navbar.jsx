import React, { Component } from 'react'
import Svg from 'react-inlinesvg';

class Navbar extends Component {
  render() {
    return (
      <div>

        <Svg
          src={require("../images/logo.svg")}
          alt="Cart"
          height="22px"
        />
        <div>Menu</div>
        <div>Beverages</div>
        <div>Gifts</div>
        <div>
          <Svg
            src={require("../images/cart_icon.svg")}
            alt="Cart"
            height="22px"
          />
        </div>
        <div>Cart</div>
      </div>
    )
  }
}

export default Navbar;
