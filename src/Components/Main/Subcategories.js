import React, { Component } from 'react'
import SubcategoryChild from './SubcategoryChild'

class Subcategories extends Component {
    constructor(props) {
      super(props)
    }
    
  render() {
    const category=this.props.category;

    var elements=category.map(
        (element)=>{
            return <SubcategoryChild info={element} onSubCategoryChange={this.props.onSubCategoryChange} />
        }
      )

    return (
      <aside>
        {elements}
      </aside>
    )
  }
}

export default Subcategories
