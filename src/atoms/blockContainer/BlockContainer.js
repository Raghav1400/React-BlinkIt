import React from 'react'
import Styles from './BlockContainer.module.css'
function BlockContainer(props) {
  return (
    <div className={Styles[props.className]}>
      {props.content}
    </div>
  )
}

export default BlockContainer
