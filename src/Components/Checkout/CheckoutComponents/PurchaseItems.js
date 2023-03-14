import React, { Component } from 'react'
import CartItem from './CartItem';
export class PurchaseItems extends Component {
  render() {
    const cart=this.props.cartInfo.cards;
    var elements=cart.filter(
        (element)=>{
            return element.count>0;
        }
    ).map(
        (element)=>{
            return <CartItem item={element} clickAdd={this.props.clickAdd} clickPlus={this.props.clickPlus} clickMinus={this.props.clickMinus}/>
        }
    );
    return (
        <div id="item-container">
            {elements}
    </div>
    )
  }
}

export default PurchaseItems
