import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams}from 'react-router-dom'
import { getCarById } from "../Actions/carActions";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
function CarPage() {
    const {carId} = useParams()
    const dispatch = useDispatch();
    const carDetail = useSelector(state => state.car)
    const {loading, car } = carDetail

    const [start, setStartDate] = useState(new Date())
    const [end, setEndDate] = useState(new Date())

    useEffect(() => {
        dispatch(getCarById(carId))
    }, [dispatch, carId])

    const handleSelect = (args) => {
        console.log(args.value)
    }
    const onRenderDayCell = (args) =>
    {
        //console.log(args)
        let invDates = getDatesInRange()
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
        //console.log(dates)
        return dates
    }
    return (
        <section>
            {loading ? (
                <div>
                    <h1>Cargando</h1>
                </div>
            ) : (
                <><h1>{car.marca}</h1>
                    <div >
                        <DateRangePickerComponent
                            min={start}
                            startDate={start}
                            endDate={end}
                            onChange={handleSelect}
                            renderDayCell={onRenderDayCell}
                            strictMode={true}
                        ></DateRangePickerComponent>
                    </div>
                </>
            )}
        </section>
    )
}


export default CarPage