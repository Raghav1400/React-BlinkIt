import React, { Component } from 'react'

export class CategoryChild extends Component {
    constructor(props) {
      super(props)
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div category={this.props.info}>
        {this.props.info}
      </div>
    )
  }
}

export default CategoryChild
