import React from 'react'
import {SubcategoryChild} from '../../molecules/main'
import {connect} from 'react-redux'

const Subcategories =(props)=>{
    return (
      <aside>
        {
          props.subcategories
          .filter(
            (element)=>{
              return (element['category'] === props.category)||(props.category ==='default');
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

const mapStateToProps =(state,props)=> {
  return {
    subcategories:state.subcategory.subcategories
  }
}
export default connect(mapStateToProps)(Subcategories)
