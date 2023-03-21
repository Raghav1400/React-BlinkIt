import React, { Component } from 'react'
import ItemPrice from '../../Card/ItemPrice'

export class CartItem extends Component {
  render() {

    return (
       <div className="item">
            <img className="item-image" src={this.props.item.img_src} alt="potato-img"/>
            <div className="item-info">
                <div className="item-name">{this.props.item.name}</div>
                <div className="item-weight">{this.props.item.weight}</div>
                <ItemPrice info={this.props.item}/>
            </div>
        </div> 
    )
  }
}

export default CartItem
