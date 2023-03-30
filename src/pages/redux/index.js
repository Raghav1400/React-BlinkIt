import {combineReducers} from 'redux'
import {cardReducer} from './cardRedux'
import maincategoryReducer from './mainCategory'
import subcategoryReducer from './subCategory'
import lacationReducer from './locationinfo'
import {createStore} from 'redux'

const rootReducer=combineReducers({
    cards:cardReducer,
    maincategory:maincategoryReducer,
    subcategory:subcategoryReducer,
    locations:lacationReducer,
})

const store=createStore(rootReducer);

export default store