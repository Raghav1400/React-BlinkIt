import React from 'react'

function CardImage(props) {
  return (
    <div className='section-bottom-item-img'>
      <img src={props.src} alt={props.alt}/>
    </div>
  )
}

export default CardImage
