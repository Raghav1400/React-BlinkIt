import React from 'react'
import {SubcategoryChild} from '../../../../molecules/main'
import {connect} from 'react-redux'
import { checkSelectedCategory } from './helper'
import './Subcategories.module.css'

const Subcategories =(props)=>{
    return (
      <aside>
        {
          props.subcategories
          .filter(
            (element)=>{
              return checkSelectedCategory(element,props.category);
            }
          )
          .map(
            (element)=>{
                return <SubcategoryChild key={element.id} info={element} onSubcategoryChange={props.onSubcategoryChange} />
            }
          )
        }
      </aside>
    )
}

const mapStateToProps =(state)=> {
  return {
    subcategories:state.subcategory.subcategories
  }
}
export default connect(mapStateToProps)(Subcategories)
