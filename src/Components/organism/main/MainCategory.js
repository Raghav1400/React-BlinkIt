import React from 'react'
import {CategoryChild} from '../../molecules/main'
import {connect} from 'react-redux'

const MainCategory =(props)=>{
    return (
      <div id='second-header' onClick={(e)=>props.onCategoryChange(e.target)}>
        {
          props.categories.map(
            function(element){
                return <CategoryChild key={element} info={element}/>
            }
          )
        }
      </div>
    )
}


const mapStateToProps =(state,props)=> {
  return {
    categories:state.maincategory.categories
  }
}
export default connect(mapStateToProps)(MainCategory)
