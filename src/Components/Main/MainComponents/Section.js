import React, { Component } from 'react'

import GeneralInfo from './GeneralInfo'
import CardsContainer from './CardsContainer'

class Section extends Component {
  render() {
    return (
      <section>
        <GeneralInfo id="section-top"/>
        <CardsContainer id="section-bottom" cards={this.props.cards} clickAdd={this.props.clickAdd} clickPlus={this.props.clickPlus} clickMinus={this.props.clickMinus}/>
      </section>
    )
  }
}

export default Section
