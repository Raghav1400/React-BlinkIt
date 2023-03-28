import React from 'react'
import { addItem,increaseCount, decreaseCount } from '../../../redux/cards';
import {connect} from 'react-redux'
import ItemPriceWithCount from './ItemPriceWithCount';

const ItemPrice =(props)=>{
    const {addItem,clickMinus,clickPlus}=props;
    const {id,count,price,newPrice,oldPrice}=props.info;
    return (
        <div className="section-bottom-item-price-add" id={id}>
            <div className="price" price={price}>
                <div className="new-price">
                    {newPrice}
                </div>
                <div className="old-price">
                    {oldPrice}
                </div>
            </div>
                {count===0 && (<button onClick={()=>addItem(id)}>ADD</button>)}
                {count!==0 && (<ItemPriceWithCount elementId={id} clickMinus={clickMinus} clickPlus={clickPlus} count={count}/>)}
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addItem:(id)=>{dispatch(addItem(id))},
        clickPlus:(id)=>{dispatch(increaseCount(id))},
        clickMinus:(id)=>{dispatch(decreaseCount(id))},
    }
}
export default connect(null,mapDispatchToProps)(ItemPrice)
