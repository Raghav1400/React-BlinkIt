import React from 'react'
import {connect} from 'react-redux'
import {Card} from '../../molecules/main'

const  CardsContainer=(props)=>{
    var {category,subcategory}=props;
    return (
      <div id="section-bottom">
        {//write inline logic in helper
          props.cards
          .filter(
            (element)=>{
              var elementCategory=element.category;
              var elementSubcategory=element.subcategory;
              return (category==='default'&&subcategory==='default')||(category==='default'&&subcategory===elementSubcategory)||(category===elementCategory&&subcategory==='default')||(category===elementCategory&&subcategory===elementSubcategory);
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
