import React, { Component } from 'react'
import SubcategoryChild from './SubcategoryChild'
import {connect} from 'react-redux'

class Subcategories extends Component {
  render() {
    var elements=this.props.subcategories
      .filter(
        (element)=>{
          return (element['category'] ==this.props.category)||(this.props.category=='default');
        }
      )
      .map(
        (element)=>{
            return <SubcategoryChild key={element.id} info={element} onSubCategoryChange={this.props.onSubCategoryChange} />
        }
      )

    return (
      <aside>
        {elements}
      </aside>
    )
  }
}

const mapStateToProps =(state,props)=> {
  return {
    ...props,
    subcategories:state.subcategory.subcategories
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {};
}
export default connect(mapStateToProps,mapDispatchToProps)(Subcategories)
