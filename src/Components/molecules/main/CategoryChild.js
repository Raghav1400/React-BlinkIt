import React, { Component } from 'react'

const CategoryChild =(props)=>{
    return (
      <div category={props.info}>
        {props.info}
      </div>
    )
}

export default CategoryChild
