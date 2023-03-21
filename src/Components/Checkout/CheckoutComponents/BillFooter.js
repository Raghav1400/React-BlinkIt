import React, { Component } from 'react'
import {connect} from 'react-redux'

export class BillFooter extends Component {
  render() {
    const cart=this.props.card;
    var grandTotal=0;
    var originaltotal=0;
    var discount=0;
    var items=0;
    cart.forEach(
        function(element){
            if(Number(element.count)>0){
                items+=Number(element.count);
                discount+=(Number(element.newPrice) -Number(element.oldPrice))*Number(element.count);
                originaltotal +=Number(element.oldPrice)*Number(element.count);
                grandTotal +=Number(element.newPrice)*Number(element.count);
            }
        }
    )
    return (
      <>
        <div className="item-detail">
            <div>MRP</div>
            <div>₹{originaltotal}</div>
        </div>
        <div className="item-detail">
            <div>Product discount</div>
            <div>₹{discount}</div>
        </div>
         <div className="item-detail">
            <div>delivery charge</div>
            <div>FREE</div>
        </div>
        <div className="item-detail">
            <h4>Grand Total</h4>
            <div>₹{grandTotal}</div>
        </div>
        <div className="item-detail proceed">
            <div className="item-detail">
                <div>{items} items</div>
                <div>₹{grandTotal}</div>
                <div><strike>₹{originaltotal}</strike></div>
            </div>
            <div>{'proceed  >'} </div>
        </div>
      </>
    )
  }
}

const mapStateToProps =(state,props)=> {
    return {
        ...props,
        card:state.card.cards
    }
  }
const mapDispatchToProps=(dispatch)=>{
    return{
    
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(BillFooter)
