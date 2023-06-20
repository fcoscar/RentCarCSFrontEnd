import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {getAll} from '../src/Reducers/car' 

const reducer = combineReducers({
  cars: getAll
})

 const store = configureStore({
    reducer
})
export default store