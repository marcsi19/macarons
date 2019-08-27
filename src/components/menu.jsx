import React, { Component } from 'react'
import Svg from 'react-inlinesvg';

class Menu extends Component {
  render() {
    return (
      <div>
        <h3>Menu</h3>
        <Svg
          src={require("../images/logo.svg")}
          alt="Logo"
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

export default Menu;


{/* <div><img
          src={this.state.menuItems[0].image}
          alt="Logo"
        />
          {this.state.menuItems[0].description.split('\n').map((item, i) => <p key={i}>{item}</p>)}
        </div> */}
