import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../Constants/userConstants";

export const LogIn = (state = {userInfo:{}}, action) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true, userInfo: {}}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {...state, userInfo: {} }
        default:
            return state
    }
}