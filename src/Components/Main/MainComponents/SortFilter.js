import React, { Component } from 'react'

export class SortFilter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div id={this.props.id}>
        <label>
            Sort By
            <select id="filter">
                <option value="Revelance">Revelance</option>
            </select>
        </label>
      </div>
    )
  }
}

export default SortFilter
