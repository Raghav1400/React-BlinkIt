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
    return (
        <a href="" id={this.props.id}>
            <img id="header-cart-logo" src={logo} />
            <div id="header-cart-button">My Cart</div>
        </a>
    )
  }
}

export default CartButton
