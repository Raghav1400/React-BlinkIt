import React from 'react'
import {connect} from 'react-redux'
import { calculateBill } from './helper';
import Styles from './BillFooter.module.css'

const BillFooter =(props)=>{
    const {grandTotal,originaltotal,discount,items}=calculateBill(props.card);
    return (
      <>
        <div className={Styles['item-detail']}>
            <div>MRP</div>
            <div>₹{originaltotal}</div>
        </div>
        <div className={Styles['item-detail']}>
            <div>Product discount</div>
            <div>₹{discount}</div>
        </div>
         <div className={Styles['item-detail']}>
            <div>delivery charge</div>
            <div>FREE</div>
        </div>
        <div className={Styles['item-detail']}>
            <h4>Grand Total</h4>
            <div>₹{grandTotal}</div>
        </div>
        <div className={`${Styles['proceed']} ${Styles['item-detail']}`}>
            <div className={Styles['item-detail']}>
                <div>{items} items</div>
                <div>₹{grandTotal}</div>
                <div><strike>₹{originaltotal}</strike></div>
            </div>
            <div>{'proceed -->'} </div>
        </div>
      </>
    )

}

const mapStateToProps =(state,props)=> {
    return {
      card:state.card.cards
    }
  }
export default connect(mapStateToProps)(BillFooter)
