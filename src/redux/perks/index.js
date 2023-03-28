import perks from '../../data/perks.json'

const initialCardState ={
    perks:perks
}

const perksReducer=(state=initialCardState,action)=>{
    return state
}

export default perksReducer