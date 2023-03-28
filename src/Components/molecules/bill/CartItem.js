import React from 'react'
import ItemPrice from '../Card/ItemPrice'

const CartItem =(props)=>{
  const {item}=props;
    return (
       <div className="item">
            <img className="item-image" src={item.img_src} alt="potato-img"/>
            <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-weight">{item.weight}</div>
                <ItemPrice info={item}/>
            </div>
        </div> 
    )
}
export default CartItem
