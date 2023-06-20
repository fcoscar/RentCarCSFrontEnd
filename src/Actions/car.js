import { CAR_REQUEST, CAR_FAIL,CAR_SUCCESS } from "../Constants/carConstants";

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