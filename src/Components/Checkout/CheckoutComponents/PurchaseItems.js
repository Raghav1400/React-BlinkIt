import React, { Component } from 'react'
import CartItem from './CartItem';
import {connect} from 'react-redux'

export class PurchaseItems extends Component {
  render() {
    const cart=this.props.card;
    var elements=cart.filter(
        (element)=>{
            return element.count>0;
        }
    ).map(
        (element)=>{
            return <CartItem item={element}/>
        }
    );
    return (
        <div id="item-container">
            {elements}
    </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(PurchaseItems)
