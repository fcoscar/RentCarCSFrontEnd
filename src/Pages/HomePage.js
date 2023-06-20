import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAll} from '../Actions/car'

function HomePage () {
    const dispatch = useDispatch();
    const carros = useSelector(state => state.cars)
    const {loading, cars} = carros

    useEffect(() => {
        dispatch(getAll());
    },[dispatch])

    return (
        <div className='ml-5' >
           {cars.map((car) => 
           <h1>{car.marca}</h1>)}
        </div>
    )
}
export default HomePage