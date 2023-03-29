import React from 'react'
import {ItemPrice} from '../../itemPrice'
import Styles from './CartItem.module.css'

const CartItem =(props)=>{
  const {item}=props;
    return (
       <div className={Styles["item"]}>
            <img className={Styles["item-image"]} src={item.img_src} alt="potato-img"/>
            <div className={Styles["item-info"]}>
                <div className="item-name">{item.name}</div>
                <div className="item-weight">{item.weight}</div>
                <ItemPrice info={item}/>
            </div>
        </div> 
    )
}
export default CartItem
