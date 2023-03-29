import React from 'react'
import Styles from './ExtraInfo.module.css'
function ExtraInfo(props) {
  return (
    <div className={Styles[props.className]} >
      {props.info}
    </div>
  )
}

export default ExtraInfo
