import React from 'react'
import Styles from './ImageContainer.module.css'

function ImageContainer(props) {
  return (
    <div className={Styles[props.className]}>
      <img className={Styles[props.childClass]} src={props.src} alt={props.alt}/>
    </div>
  )
}

export default ImageContainer
