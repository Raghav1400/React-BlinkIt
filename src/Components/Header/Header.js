import React, { Component } from 'react'


import Logo from './Logo'
import Location from './Location'
import CartButton from './CartButton'
import LoginButton from './LoginButton'

class Header extends Component {
    constructor(props) {
      super(props)
    }
    
  render() {
    return (
      <div id={this.props.id}>
         <div>
            <Logo id="header-blinkit-logo"/>
            <Location id="header-location-info" />
        </div>
        <div>
            <LoginButton id="header-login"/>
            <CartButton href="/" id="header-mycart" cartInfo={this.props.cartInfo}/>   
        </div>  
      </div>
    )
  }
}

export default Header
