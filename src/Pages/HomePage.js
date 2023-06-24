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
           {cars.map((car, id) =>
            <div key={id}>
                <h1>{car.marca}</h1>
                <a href={`/car/${car.id}`}>Ver Carro</a>
            </div>
           )}
        </div>
    )
}
export default HomePage