import cards from '../../../data/cards.json'
import {INCREASE_COUNT,DECREASE_COUNT } from "./cardActionType";

const initialCardState ={
    cards
}

export const selectAllCards=(state)=>{
    return state.cards.cards;
}

const cardReducer=(state=initialCardState,action)=>{
    let newState=null;
    switch(action.type){
        case INCREASE_COUNT:
            newState=state.cards.map(
                (element)=>{
                    if(element.id===action.id){
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
        case DECREASE_COUNT:
            newState=state.cards.map(
                (element)=>{
                    if(element.id===action.id){
                        return {
                            ...element,
                            count:element.count-1
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

        default: return state;
    }
}

export default cardReducer