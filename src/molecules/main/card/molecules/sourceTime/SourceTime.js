import React from 'react'
import { BlockContainer } from '../../../../../atoms'

function SourceTime(props) {
  return (
    // <div className='section-bottom-item-source-time'>
    //   {props.time}
    // </div>
    <BlockContainer className='section-bottom-item-source-time' content={props.time}/>
  )
}

export default SourceTime
