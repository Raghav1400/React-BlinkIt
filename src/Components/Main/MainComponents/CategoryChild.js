import React, { Component } from 'react'

export class CategoryChild extends Component {
  render() {
    return (
      <div category={this.props.info}>
        {this.props.info}
      </div>
    )
  }
}

export default CategoryChild
