import React from 'react'
import {CategoryChild} from '../../../../molecules/main'
import {connect} from 'react-redux'
import Styles from './MainCategory.module.css'
//import { categories } from './constant'
// map function should be in helper file
const MainCategory =(props)=>{
    return (
      <div className={Styles['header']} onClick={(e)=>props.onCategoryChange(e.target)}>
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

// use selectors, remove second parameter
const mapStateToProps =(state)=> {
  return {
    categories:state.maincategory.categories
  }
}
export default connect(mapStateToProps)(MainCategory)
