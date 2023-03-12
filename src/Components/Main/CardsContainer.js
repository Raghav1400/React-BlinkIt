import React, { Component } from 'react'

import Card from './Card'
class CardsContainer extends Component {
    constructor(props) {
      super(props)
    }
    
  render() {
    var elements=this.props.cards.map(
        (element)=>{
            return <Card info={element} clickAdd={this.props.clickAdd} clickPlus={this.props.clickPlus} clickMinus={this.props.clickMinus}/>;
        }
      )
    
    return (
      <div id={this.props.id}>
        {elements}
      </div>
    )
  }
}

export default CardsContainer
