import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import * as carReducer from './Reducers/carReducer'
import * as userReducer from './Reducers/userReducer'

const reducer = combineReducers({
    cars: carReducer.getAll,
    car: carReducer.getCarById,
    auth: userReducer.LogIn
})

const userInfoFromStorage = localStorage.getItem('auth') ?
    JSON.parse(localStorage.getItem('auth')) : null


const initialState = {
    auth: {userInfo:userInfoFromStorage}
}

const store = configureStore({
    preloadedState: initialState,
    reducer
})
export default store