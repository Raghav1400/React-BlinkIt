import React from 'react'
import {ItemPrice} from '../../itemPrice'
import { CardDiscountButton,CardImage,ItemName,ItemWeight,SourceTime } from './molecules';
import Styles from './Card.module.css'

const Card =(props)=>{
  const {discount,img_src,img_alt,source_time,name,weight}=props.info;
    return (
      <div className={Styles['card']}>
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
