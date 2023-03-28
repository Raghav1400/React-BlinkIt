import React from 'react'
import { Link } from "react-router-dom";
import { calculateCartItems } from './helper';

const CartButton =(props)=>{
    const [cartPrice,cartCount]=calculateCartItems(props.cards);
    return (
      <Link to='/checkout' id={props.id}>
        <img id="header-cart-logo" src='./assects/icons8-shopping-cart-50.png' alt=''/>
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
export default CartButton
