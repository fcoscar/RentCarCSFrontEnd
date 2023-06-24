import { CAR_REQUEST, CAR_SUCCESS, CAR_FAIL, CAR_DETAIL_SUCCESS, CAR_DETAIL_FAIL, CAR_DETAIL_REQUEST } from "../Constants/carConstants";

export const getAll = (state = {cars: []}, action) => {
    switch(action.type){
        case CAR_REQUEST:
            return {...state, loading:true, cars:[]}
        case CAR_SUCCESS:
            return {...state, loading:false, cars: action.payload}
        case CAR_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const getCarById = (state = {car: {}}, action) => {
    switch(action.type){
        case CAR_DETAIL_REQUEST:
            return {loading:true, car:{}}
        case CAR_DETAIL_SUCCESS:
            return {loading:false, car: action.payload}
        case CAR_DETAIL_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}