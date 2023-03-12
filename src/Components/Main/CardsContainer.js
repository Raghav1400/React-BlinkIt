import React, { Component } from 'react'

import Card from './Card'
class CardsContainer extends Component {
    constructor(props) {
      super(props)
    }
    
  render() {
    var elements=this.props.cards.map(
        function(element){
            return <Card info={element}/>;
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
