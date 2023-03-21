import cardData from '../../data/cards.json'
import { ADD_ITEM,INCREASE_COUNT,DECREASE_COUNT } from "./cardActionType";

const initialCardState ={
    cards:cardData
}

const cardReducer=(state=initialCardState,action)=>{
    switch(action.type){
        case ADD_ITEM:
            const newState=state.cards.map(
                (element)=>{
                    if(element.id==action.id){
                        return {
                            ...element,
                            count:element.count+1
                        }
                    }
                    else{
                        return element;
                    }
                }
            )
            return {
                cards:newState
            }
        case INCREASE_COUNT:
            return {
                cards:newState
            }
        case DECREASE_COUNT:
            return {
                cards:newState
            }

        default: return state;
    }
}

export default cardReducer