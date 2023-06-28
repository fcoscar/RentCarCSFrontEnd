import { CAR_REQUEST, CAR_FAIL,CAR_SUCCESS, CAR_DETAIL_REQUEST, CAR_DETAIL_SUCCESS, CAR_DETAIL_FAIL } from "../Constants/carConstants";

export const getAll = () => async(dispatch) => {
    try{
        dispatch({type:CAR_REQUEST})
        const response = await fetch(`${process.env.REACT_APP_API}/Car`)
        const data = await response.json()
        dispatch({
            type:CAR_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: CAR_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })
    }
}

export const getCarById = (id) => async (dispatch) => {
    
    try{
        dispatch({
            type:CAR_DETAIL_REQUEST
        })
        const response = await fetch(`${process.env.REACT_APP_API}/Car/${id}`)
        const data = await response.json()
        dispatch({
            type: CAR_DETAIL_SUCCESS,
            payload: data.data
        })

    }catch(error){
        dispatch({
            type: CAR_DETAIL_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })
    }
}