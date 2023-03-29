import React from 'react'
import { Link } from "react-router-dom";
import { calculateCartItems } from './helper';
import Styles from './CartButton.module.css'

const CartButton =(props)=>{
    const [cartPrice,cartCount]=calculateCartItems(props.cards);
    return (
      <Link to='/checkout' className={Styles['header-mycart']}>
        <img className={Styles['header-cart-logo']} src='./assects/icons8-shopping-cart-50.png' alt=''/>
        {
          cartCount===0?
            (<div className={Styles['header-cart-button']}>My Cart</div>) :
            (
              <div className={Styles['cart-info']}>
                <div>{cartCount} Items</div>
                <div>₹ {cartPrice}</div>
              </div>
            )
        }
      </Link>
    )
}
export default CartButton
