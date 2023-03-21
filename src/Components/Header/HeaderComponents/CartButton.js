import React, { Component } from 'react'
import logo from '../../../assects/icons8-shopping-cart-50.png'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

class CartButton extends Component {
    
  render() {
    var cartCount=0;
    var cartPrice=0;
    this.props.card.forEach(element => {
      if(element.count>0){
        cartCount+=Number(element.count);
        cartPrice+=Number(element.count)*Number(element.newPrice);
      }
    });
    var cartElement;
    if(cartCount==0){
      cartElement=(
        <div id="header-cart-button">My Cart</div>
      )
    }
    else{
      cartElement=(
         
          <div id="cart-info">
            <div>{cartCount} Items</div>
            <div>₹ {cartPrice}</div>
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

const mapStateToProps =(state,props)=> {
  return {
      ...props,
      card:state.card.cards
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartButton)
