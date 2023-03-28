import React, { Component } from 'react'
import CartItem from './CartItem';
import {connect} from 'react-redux'

const PurchaseItems =(props)=>{
    const cart=props.card;
    return (
        <div id="item-container">
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
