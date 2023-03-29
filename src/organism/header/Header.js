import React from 'react'
import {connect} from 'react-redux'
import {CartButton,Logo,Location,LoginButton} from '../../molecules/header'
import Styles from './Header.module.css'


function Header(props){
    return (
      <div className={Styles.header}>
         <div>
            <Logo src="https://blinkit.com/9f644712ea8611916099.png"/>
            <Location locations={props.locations} />
        </div>
        <div>
            <LoginButton />
            <CartButton cards={props.cards}/>   
        </div>  
      </div>
    )
}

const mapStateToProps =(state,props)=> {
  return {
      cards:state.card.cards,
      locations:state.locations.locations
  }
}
export default connect(mapStateToProps,null)(Header)
