import {combineReducers} from 'redux'
import cardReducer from './cards/cardReducer'
import maincategoryReducer from './mainCategory'
import subcategoryReducer from './subCategory'
import perksReducer from './perks'
import lacationReducer from './locationinfo'
import socialInfoReducer from './socialInfo'
import downloadInfoReducer from './downloadInfo'
import {createStore} from 'redux'

const rootReducer=combineReducers({
    card:cardReducer,
    maincategory:maincategoryReducer,
    subcategory:subcategoryReducer,
    perks:perksReducer,
    locations:lacationReducer,
    socialInfo:socialInfoReducer,
    downloadInfo:downloadInfoReducer
})

const store=createStore(rootReducer);

export default store