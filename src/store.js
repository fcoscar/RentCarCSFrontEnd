import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {getAll} from '../src/Reducers/car' 
import { getCarById } from '../src/Reducers/car'

const reducer = combineReducers({
  cars: getAll,
  car: getCarById
})

 const store = configureStore({
    reducer
})
export default store