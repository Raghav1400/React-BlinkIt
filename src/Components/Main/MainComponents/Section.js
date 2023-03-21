import React, { Component } from 'react'

import GeneralInfo from './GeneralInfo'
import CardsContainer from './CardsContainer'

class Section extends Component {
  render() {
    return (
      <section>
        <GeneralInfo id="section-top"/>
        <CardsContainer id="section-bottom" category={this.props.category} subcategory={this.props.subcategory}/>
      </section>
    )
  }
}

export default Section
