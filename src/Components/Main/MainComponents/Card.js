import React, { Component } from 'react'

import CardDiscountButton from '../../Card/CardDiscountButton'
import CardImage from '../../Card/CardImage'
import SourceTime from '../../Card/SourceTime'
import ItemName from '../../Card/ItemName'
import ItemWeight from '../../Card/ItemWeight'
import ItemPrice from '../../Card/ItemPrice'

class Card extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div className='section-bottom-item'>
        <CardDiscountButton discount={this.props.info.discount}/>
        <CardImage src={this.props.info.img_src} alt={this.props.info.img_alt}/>
        <SourceTime time={this.props.info.source_time}/>
        <ItemName name={this.props.info.name}/>
        <ItemWeight weight={this.props.info.weight} />
        <ItemPrice info={this.props.info} clickAdd={this.props.clickAdd} clickPlus={this.props.clickPlus} clickMinus={this.props.clickMinus}/>
      </div>
    )
  }
}

export default Card
