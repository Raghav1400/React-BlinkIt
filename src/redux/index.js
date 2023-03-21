import {combineReducers} from 'redux'
import cardReducer from './cards/cardReducer'
import maincategoryReducer from './mainCategory/index'
import subcategoryReducer from './subCategory/index'
import {createStore} from 'redux'

export const rootReducer=combineReducers({
    card:cardReducer,
    maincategory:maincategoryReducer,
    subcategory:subcategoryReducer
})

const store=createStore(rootReducer);

export default store