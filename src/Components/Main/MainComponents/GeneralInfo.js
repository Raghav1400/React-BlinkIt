import React, { Component } from 'react'

import SortFilter from './SortFilter'

class GeneralInfo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div id={this.props.id}>
        <div>Buy Fresh Grocery Items</div>
        <SortFilter id="section-top-filter"/>
      </div>
    )
  }
}

export default GeneralInfo
