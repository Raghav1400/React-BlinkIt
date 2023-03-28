import React from 'react'
import {connect} from 'react-redux'
import {CartButton,Logo,Location,LoginButton} from '../molecules/header'

function Header(props){
    return (
      <div id='header'>
         <div>
            <Logo id="header-blinkit-logo" src="https://blinkit.com/9f644712ea8611916099.png"/>
            <Location id="header-location-info" />
        </div>
        <div>
            <LoginButton id="header-login"/>
            <CartButton id="header-mycart" cards={props.cards}/>   
        </div>  
      </div>
    )
}

const mapStateToProps =(state,props)=> {
  return {
      cards:state.card.cards
  }
}
export default connect(mapStateToProps,null)(Header)
