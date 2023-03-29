import React from 'react'
import Styles from './ItemPriceWithCount.module.css'
function ItemPriceWithCount(props) {
    const id=props.elementId;
    const {clickMinus,clickPlus}=props;
  return (
    <button className={Styles["cart-button"]} >
        <div className="minus" onClick={()=>clickMinus(id)}>
            -
        </div>
        <div className="quantity">
            {props.count}
        </div>
        <div className="plus" onClick={()=>clickPlus(id)}>
            +
        </div>
    </button> 
  )
}

export default ItemPriceWithCount
