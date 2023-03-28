import React from 'react'
import {connect} from 'react-redux'
import {Card} from '../../molecules/main'
import { checkSelectedCategoryAndSubcategory } from './helper';

const  CardsContainer=(props)=>{
    var {category,subcategory}=props;
    return (
      <div id="section-bottom">
        {
          props.cards
          .filter(
            (element)=>{
              return checkSelectedCategoryAndSubcategory(element,category,subcategory);
            }
          )
          .map(
            (element)=>{
                return <Card key={element.id} info={element}/>;
            }
          )
        }
      </div>
    )
}

const mapStateToProps =(state,props)=> {
  return {
    cards:state.card.cards
  }
}
export default connect(mapStateToProps)(CardsContainer)
