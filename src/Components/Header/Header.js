import React, { Component } from 'react'

// import '../../css/style.css'

import Logo from './Logo'
import Location from './Location'
import CartButton from './CartButton'
import LoginButton from './LoginButton'

class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
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
            <CartButton href="/" id="header-mycart"/>   
        </div>  
      </div>
    )
  }
}

export default Header
