import { CAR_REQUEST, CAR_SUCCESS, CAR_FAIL } from "../Constants/carConstants";

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