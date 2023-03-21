import { ADD_ITEM,INCREASE_COUNT,DECREASE_COUNT } from "./cardActionType";

export const addItem=(uid)=>{
    return {
        type:ADD_ITEM,
        id:uid
    };
}
export const increaseCount=(uid)=>{
    return {
        type:INCREASE_COUNT,
        id:uid
    };
}
export const decreaseCount=(uid)=>{
    return {
        type:DECREASE_COUNT,
        id:uid
    };
}