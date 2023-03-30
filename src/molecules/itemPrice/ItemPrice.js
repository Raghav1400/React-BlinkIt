import React from 'react'
import {increaseCount, decreaseCount } from '../../pages/redux/cardRedux';
import {connect} from 'react-redux'
import {ItemPriceWithCount} from './molecule';
import Styles from './ItemPrice.module.css'

const ItemPrice =(props)=>{
    const {clickMinus,clickPlus}=props;
    const {id,count,price,newPrice,oldPrice}=props.info;
    return (
        <div className={Styles["section-bottom-item-price-add"]} id={id}>
            <div className={Styles["price"]} price={price}>
                <div className={Styles["new-price"]}>
                    {newPrice}
                </div>
                <div className={Styles["old-price"]}>
                    {oldPrice}
                </div>
            </div>
                {count===0 && (<button className={Styles['add-btn']} onClick={()=>clickPlus(id)}>ADD</button>)}
                {count!==0 && (<ItemPriceWithCount elementId={id} clickMinus={clickMinus} clickPlus={clickPlus} count={count}/>)}
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        clickPlus:(id)=>{dispatch(increaseCount(id))},
        clickMinus:(id)=>{dispatch(decreaseCount(id))},
    }
}
export default connect(null,mapDispatchToProps)(ItemPrice)
