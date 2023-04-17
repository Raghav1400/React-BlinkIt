import {INCREASE_COUNT,DECREASE_COUNT } from "./cardActionType";

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