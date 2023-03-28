import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { calculateCartItems } from './helper';

class CartButton extends Component {
  render() {
    const [cartPrice,cartCount]=calculateCartItems(this.props.cards);
    return (
      <Link to='/checkout' id={this.props.id}>
        <img id="header-cart-logo" src='./assects/icons8-shopping-cart-50.png' />
        {
          cartCount===0?
            (<div id="header-cart-button">My Cart</div>) :
            (
              <div id="cart-info">
                <div>{cartCount} Items</div>
                <div>₹ {cartPrice}</div>
              </div>
            )
        }
      </Link>
    )
  }
}
export default CartButton
