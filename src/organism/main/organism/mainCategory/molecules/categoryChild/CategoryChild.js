import React from 'react'

const CategoryChild =(props)=>{
    return (
      <div category={props.type}>
        {props.info}
      </div>
    )
}

export default CategoryChild
