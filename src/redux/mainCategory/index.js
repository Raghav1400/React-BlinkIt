import categories from '../../data/categories.json'


const FETCH_CATEGORIES='FETCH_CATEGORIES';

export const fetchCategories=()=>{
    return {
        type:FETCH_CATEGORIES
    };
}

const initialCardState ={
    categories:categories
}

const maincategoryReducer=(state=initialCardState,action)=>{
    switch(action.type){
        case FETCH_CATEGORIES:
            return state;
        default: return state;
    }
}

export default maincategoryReducer