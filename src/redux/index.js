import {combineReducers} from 'redux'
import cardReducer from './cards/cardReducer'
import maincategoryReducer from './mainCategory'
import subcategoryReducer from './subCategory'
import perksReducer from './perks'
import {createStore} from 'redux'

const rootReducer=combineReducers({
    card:cardReducer,
    maincategory:maincategoryReducer,
    subcategory:subcategoryReducer,
    perks:perksReducer
})

const store=createStore(rootReducer);

export default store