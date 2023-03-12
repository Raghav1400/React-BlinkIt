import React, { Component } from 'react'
import mainCategories from '../../data/categories.json' 
import CategoryChild from './CategoryChild'

class MainCategory extends Component {
    constructor(props) {
      super(props)
      this.state = {
         categories:mainCategories,
      }
    }
    
  render() {
    var elements=this.state.categories.map(
            function(element){
                return <CategoryChild info={element}/>
            }
        );

    return (
      <div id={this.props.id} onClick={(e)=>this.props.onCategoryChange(e.target)}>
        {elements}
      </div>
    )
  }
}

export default MainCategory
