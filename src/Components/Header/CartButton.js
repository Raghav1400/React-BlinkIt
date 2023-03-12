import React, { Component } from 'react'
import logo from '../../assects/icons8-shopping-cart-50.png'

class CartButton extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    // var logoLink="../public/assects/icons8-shopping-cart-50.png";
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
        <a href="" id={this.props.id}>
            <img id="header-cart-logo" src={logo} />
            {cartElement}
        </a>
    )
  }
}

export default CartButton
