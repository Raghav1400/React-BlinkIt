import {combineReducers} from 'redux'
import {cardReducer} from './cardRedux'
import lacationReducer from './locationinfo'
import {createStore} from 'redux'

const rootReducer=combineReducers({
    cards:cardReducer,
    locations:lacationReducer,
})

const store=createStore(rootReducer);

export default store