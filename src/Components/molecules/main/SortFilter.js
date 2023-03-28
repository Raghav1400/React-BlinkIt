import React, { Component } from 'react'

export class SortFilter extends Component {
    constructor(props) {
      super(props)
      // logic of filter to be added
    }
    
  render() {
    return (
      <div id="section-top-filter">
        <label>
            Sort By
            <select id="filter">
                <option value="Revelance">Revelance</option>
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
            </select>
        </label>
      </div>
    )
  }
}

export default SortFilter
