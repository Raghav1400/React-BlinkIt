import React, { Component } from 'react'
import logo from '../../../assects/icons8-shopping-cart-50.png'
import { Link } from "react-router-dom";

class CartButton extends Component {
    constructor(props) {
      super(props)
    }
    
  render() {
    var cartElement;
    if(this.props.cartInfo.cartCount==0){
      cartElement=(
        <div id="header-cart-button">My Cart</div>
      )
    }
    else{
      cartElement=(
         
          <div id="cart-info">
            <div>{this.props.cartInfo.cartCount} Items</div>
            <div>₹ {this.props.cartInfo.cartPrice}</div>
          </div>
        
      )
    }
    return (
      <Link to='/checkout' id={this.props.id}>
        <img id="header-cart-logo" src={logo} />
        {cartElement}
      </Link>
    )
  }
}

export default CartButton
