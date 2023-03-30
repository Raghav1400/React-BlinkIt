import React from 'react'
import {connect} from 'react-redux'
import {Card} from '../../../../../../molecules/main'
import { checkSelectedCategoryAndSubcategory } from './helper';
import styles from './CardsContainer.module.css'
import { selectAllCards } from '../../../../../../pages/redux/cardRedux/cardReducer';



const  CardsContainer=(props)=>{
    var {category,subcategory}=props;
    return (
      <div className={styles["cards-container"]}>
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

const mapStateToProps =(state)=> {
  return {
    cards:selectAllCards(state)
  }
}
export default connect(mapStateToProps)(CardsContainer)
