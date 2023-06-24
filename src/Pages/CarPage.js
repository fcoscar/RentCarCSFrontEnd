import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams}from 'react-router-dom'
import { getCarById } from "../Actions/car";

function CarPage() {
    const {carId} = useParams()
    const dispatch = useDispatch();
    const carDetail = useSelector(state => state.car)
    const {loading, car } = carDetail

    useEffect(() => {
        dispatch(getCarById(carId))
    }, [dispatch])

    return (
        <h1>{car.marca}</h1>
    )
}


export default CarPage