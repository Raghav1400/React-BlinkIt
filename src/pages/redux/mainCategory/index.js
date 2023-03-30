import categories from '../../../data/categories.json'



export const selectCategories =()=>{
    
}

const initialCardState ={
    categories:categories
}

const maincategoryReducer=(state=initialCardState,action)=>{
    return state;
}

export default maincategoryReducer