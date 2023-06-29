import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams}from 'react-router-dom'
import { getCarById } from "../Actions/carActions";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import {StarIcon} from "@heroicons/react/solid";

function CarPage() {
    const {carId} = useParams()
    const dispatch = useDispatch();
    const carDetails = useSelector(state => state.car)
    const {loading, car } = carDetails

    const [start, setStartDate] = useState(new Date())
    const [end, setEndDate] = useState(new Date())

    const handleSelect = (args) => {
        console.log(args.value)
    }
    const onRenderDayCell = (args) =>
    {
        //console.log(args)
        let invDates = getDatesInRange()
        invDates.push(new Date().toDateString())
        if(invDates.includes(new Date(args.date).toDateString())){
            args.isDisabled = true
        }
    }

    const getDatesInRange = () => {
        let dates = []
        car?.alqs?.map((alq) =>{
            let date = new Date(alq.from)
            while ( date <= new Date(alq.to)){
                dates.push(new Date(date).toDateString())
                date.setDate(date.getDate() + 1)
                }
            })
        return dates
    }

    useEffect(() => {
        dispatch(getCarById(carId))
    }, [dispatch, carId])

    return (
        <section className="relative">
            <div id='title' className="ml-80 mt-20">
                <span className='text-3xl font-bold'>{car.marca} {car.modelo} - {car.year}</span>
            </div>
            <div className="ml-80 mt-10">
                <img src='https://i.ibb.co/0Dqsn0m/escalade.jpg' alt='error'/>
            </div>

            {/*<div className="xl:mt-20 ml-60 items-center justify-center content-center">*/}
            {/*    <div>*/}
            {/*        <div className='text-4xl font-semibold px-4 mt-5 whitespace-nowrap ml-12'>*/}
            {/*            {car?.marca} {car?.modelo} - {car?.year}*/}
            {/*        </div>*/}
            {/*        <div className=' px-4 flex ml-12'>*/}
            {/*            <StarIcon className='h-5 w-5'/>  4.7 - 12 reviews - {car?.details?.location}*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className='flex ml-16 space-x-16'>*/}
            {/*        <div className='' >*/}
            {/*            <img src='https://i.ibb.co/0Dqsn0m/escalade.jpg' alt='error'/>*/}
            {/*        </div>*/}

            {/*        <div className='flex border border-gray-300  rounded-lg shadow-lg'>*/}
            {/*            <div className=''>*/}
            {/*                <h1 className='text-xl uppercase font-bold tracking-wider text-gray-500'>Datos Generales</h1>*/}
            {/*                <h1><strong>Precio:</strong> ${car?.pricePerDay} / Dia</h1>*/}
            {/*                <h1><strong>Traccion:</strong> {car?.details?.traccion}</h1>*/}
            {/*                <h1><strong>Transmisiom:</strong> {car?.details?.transmission}</h1>*/}
            {/*                <h1><strong>Combustible:</strong> {car?.combustible}</h1>*/}
            {/*                <h1><strong>Color exterior:</strong> {car?.details?.exterior}</h1>*/}
            {/*                <h1><strong>Color interior:</strong> {car?.details?.interior}</h1>*/}
            {/*            </div>*/}
            {/*            <div className=''>*/}
            {/*                <h1><strong>Tipo:</strong> {car?.categoria}</h1>*/}
            {/*                <h1><strong>Pasajeros:</strong> {car?.pasajeros}</h1>*/}
            {/*                <h1><strong>Puertas:</strong> {car?.details?.doors}</h1>*/}
            {/*                <h1><strong>Kilometraje:</strong> {car?.details?.kilometraje} kms</h1>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*        <div className='border border-gray-300  rounded-lg shadow-lg w-96  '>*/}
            {/*            <h1 className='text-xl uppercase font-bold tracking-wider text-gray-500'>Descripcion/ Detalles </h1>*/}
            {/*            <p className=''>{car?.descripcion}</p>*/}
            {/*        </div>*/}

            {/*    </div>*/}



            {/*</div>*/}


            {/*{loading ? (*/}
            {/*    <div>*/}
            {/*        <h1>Cargando</h1>*/}
            {/*    </div>*/}
            {/*) : (*/}
            {/*    <><h1>{car.marca}</h1>*/}
            {/*        <div >*/}
            {/*            <DateRangePickerComponent*/}
            {/*                min={start}*/}
            {/*                startDate={start}*/}
            {/*                endDate={end}*/}
            {/*                onChange={handleSelect}*/}
            {/*                renderDayCell={onRenderDayCell}*/}
            {/*                strictMode={true}*/}
            {/*            ></DateRangePickerComponent>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*)}*/}
        </section>
    )
}


export default CarPage