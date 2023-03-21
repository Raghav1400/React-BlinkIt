import React, { Component } from 'react'
import CategoryChild from './CategoryChild'
import {connect} from 'react-redux'

class MainCategory extends Component {
  render() {
    var elements=this.props.categories.map(
            function(element){
                return <CategoryChild key={element} info={element}/>
            }
        );

    return (
      <div id={this.props.id} onClick={(e)=>this.props.onCategoryChange(e.target)}>
        {elements}
      </div>
    )
  }
}

const mapStateToProps =(state,props)=> {
  return {
    ...props,
    categories:state.maincategory.categories
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {};
}
export default connect(mapStateToProps,mapDispatchToProps)(MainCategory)
