import React, { Component } from 'react'
import {connect} from 'react-redux'

import Card from './Card'
class CardsContainer extends Component {
  render() {
    var category=this.props.category;
    var subcategory=this.props.subcategory;
    
    var elements=this.props.cards
      .filter(
        (element)=>{
          var elementCategory=element.category;
          var elementSubcategory=element.subcategory;
          return (category=='default'&&subcategory=='default')||(category=='default'&&subcategory==elementSubcategory)||(category==elementCategory&&subcategory=='default')||(category==elementCategory&&subcategory==elementSubcategory);
        }
      )
      .map(
        (element)=>{
            return <Card key={element.id} info={element}/>;
        }
      )
    
    return (
      <div id={this.props.id}>
        {elements}
      </div>
    )
  }
}

const mapStateToProps =(state,props)=> {
  return {
    ...props,
    cards:state.card.cards
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {};
}
export default connect(mapStateToProps,mapDispatchToProps)(CardsContainer)
