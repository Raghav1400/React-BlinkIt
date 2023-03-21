import React, { Component } from 'react'
import { addItem,increaseCount, decreaseCount } from '../../redux/cards';
import {connect} from 'react-redux'

export class ItemPrice extends Component {
  render() {
    var priceElement;
    if(this.props.info.count===0){
        priceElement=(
            <button onClick={()=>this.props.addItem(this.props.info.id)}>
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
const mapStateToProps =(state,props)=> {
    return {
        ...props
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addItem:(id)=>{dispatch(addItem(id))},
        clickPlus:(id)=>{dispatch(increaseCount(id))},
        clickMinus:(id)=>{dispatch(decreaseCount(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPrice)
