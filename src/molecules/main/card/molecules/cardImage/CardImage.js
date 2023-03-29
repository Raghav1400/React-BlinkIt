import React from 'react'
import { ImageContainer } from '../../../../../atoms'
function CardImage(props) {
  return (
    // <div className='section-bottom-item-img'>
    //   <img src={props.src} alt={props.alt}/>
    // </div>
    <ImageContainer className='section-bottom-item-imgContainer' childClass='section-bottom-item-imgChild' src={props.src} alt={props.alt}/>
  )
}

export default CardImage
