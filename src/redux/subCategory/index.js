import subcategories from '../../data/subcategories.json'
import {createStore} from 'redux'

const FETCH_SUBCATEGORIES='FETCH_SUBCATEGORIES';

const initialCardState ={
    subcategories:subcategories
}

const subcategoryReducer=(state=initialCardState,action)=>{
    switch(action.type){
        case FETCH_SUBCATEGORIES:
            return state;
        default: return state;
    }
}

export default subcategoryReducer