import cards from '../../../data/cards.json'
import {INCREASE_COUNT,DECREASE_COUNT } from "./cardActionType";

// async function loadCards() {
//     await setTimeout(()=>console.log("waiting"), 5000)
//     return cards;
// }
const initialCardState = {
    cards
}

export const selectAllCards=(state)=>{
    return state.cards.cards;
}
// in different file, read about handle actions in redux, remove inline functions
const cardReducer=(state=initialCardState,action)=>{
    let newState=null;
    switch(action.type){
        case INCREASE_COUNT:
            // use sementic naming instead of newState
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