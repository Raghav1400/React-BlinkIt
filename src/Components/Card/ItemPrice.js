import React, { Component } from 'react'

export class ItemPrice extends Component {
  render() {
    var priceElement;
    if(this.props.info.count===0){
        priceElement=(
            <button onClick={()=>this.props.clickAdd(this.props.info.id)}>
                ADD
            </button> 
        )
    }
    else{
        priceElement=(
            <button className="cart-button" >
                 <div className="minus" onClick={()=>this.props.clickMinus(this.props.info.id)}>
                    -
                </div>
                <div className="quantity">
                    {this.props.info.count}
                </div>
                <div className="plus" onClick={()=>this.props.clickPlus(this.props.info.id)}>
                    +
                </div>
            </button> 
        ) 
    }
    return (
        <div className="section-bottom-item-price-add" id={this.props.info.id}>
            <div className="price" price={this.props.info.price}>
                <div className="new-price">
                    {this.props.info.newPrice}
                </div>
                <div className="old-price">
                    {this.props.info.oldPrice}
                </div>
            </div>
            {priceElement}
            
        </div>
    )
  }
}

export default ItemPrice
