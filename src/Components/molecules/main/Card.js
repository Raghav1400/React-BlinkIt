import React from 'react'
import {CardDiscountButton,CardImage,SourceTime,ItemName,ItemWeight,ItemPrice} from '../Card'

const Card =(props)=>{
  const {discount,img_src,img_alt,source_time,name,weight}=props.info;
    return (
      <div className='section-bottom-item'>
        <CardDiscountButton discount={discount}/>
        <CardImage src={img_src} alt={img_alt}/>
        <SourceTime time={source_time}/>
        <ItemName name={name}/>
        <ItemWeight weight={weight} />
        <ItemPrice info={props.info}/>
      </div>
    )
}

export default Card
