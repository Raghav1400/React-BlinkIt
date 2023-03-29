import React from 'react'
import {CartItem} from '../../../molecules/bill';
import {connect} from 'react-redux'
import Styles from './PurchaseItem.module.css'

const PurchaseItems =(props)=>{
    const cart=props.card;
    return (
        <div className={Styles["item-container"]}>
            {
                cart.filter(
                    (element)=>{
                        return element.count>0;
                    }
                ).map(
                    (element)=>{
                        return <CartItem key={element.id} item={element}/>
                    }
                )   
            }
        </div>
    )
}

const mapStateToProps =(state,props)=> {
    return {
        card:state.card.cards
    }
}
export default connect(mapStateToProps)(PurchaseItems)
