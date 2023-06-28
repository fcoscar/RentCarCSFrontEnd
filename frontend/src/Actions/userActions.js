import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../Constants/userConstants";

export const LogIn = (mail, password) => async (dispatch) => {
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const response = await fetch(`https://localhost:7289/api/Auth/LogIn`, {
            method: 'POST',
            body: JSON.stringify({
                mail: mail,
                password: password
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json()
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data.data
        })
        localStorage.setItem('auth', JSON.stringify(data.data))
    }catch (error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}

export const LogOut = () => async (dispatch) => {
    localStorage.removeItem('auth')

    dispatch({
        type: USER_LOGOUT
    })
}