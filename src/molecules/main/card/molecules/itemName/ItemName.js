import React from 'react'
import { BlockContainer } from '../../../../../atoms'

function ItemName(props) {
  return (
    // <div className='section-bottom-item-name'>
    //   {props.name}
    // </div>
    <BlockContainer className='section-bottom-item-name' content={props.name}/>
  )
}

export default ItemName
