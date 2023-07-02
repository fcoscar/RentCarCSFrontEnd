import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAll} from '../Actions/carActions'
import Cards from "../Components/Cards";
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
enableRipple(true);


function HomePage () {
    const dispatch = useDispatch();
    const carros = useSelector(state => state.cars)
    const {loading, cars} = carros
    const cats = ['Motor', 'Sedan', 'Sport/Coupe', 'Jeepeta', 'Camioneta']
    let sidebarObj;
    function onCreate() {
        sidebarObj.element.style.visibility = '';
    }

    let ticks01 = {
        placement: "After",
        format: "#,### DOP",
        largeStep: 25000,
        smallStep: 1000,
        showSmallTicks: true
    };
    let tooltip01 = { isVisible: true, format: "#,### DOP", cssClass:'e-tooltip-cutomizatio' };
    let ticks02 = {
        placement: "After",
        largeStep: 2,
        smallStep: 1,
        showSmallTicks: true
    };
    let tooltip02 = { isVisible: true};

    const priceHandler = (args) => {
        console.log(args.value)
    }
    const typeHandler = (args) => {
        console.log(args.text)
    }

    useEffect(() => {
        dispatch(getAll());
    },[dispatch])

    return (
            <section className='section h-full'>
                <div className='main h-full'>
                    {loading ? (
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 ml-10 mr-14 xl:pl-72 xl:pr-72 '>
                            <h1>loading</h1>
                        </div>
                    ) : (
                        <div className='grid grid-cols-[_1fr,_4fr]'>
                            <div className='border-r-2 h-full'>
                                <h1>Filtros</h1>

                                            <ChipListComponent selection='Multiple' click={typeHandler}>
                                                <ChipsDirective>
                                                    {cats.map((cat, id) =>
                                                        <ChipDirective key={id} text={cat}></ChipDirective>
                                                    )}
                                                </ChipsDirective>
                                            </ChipListComponent>
                                        <div className="wrap ml-5 mr-10">
                                            <div className="label">PRECIO</div>
                                            <SliderComponent id="slider-price" type='Range' min={0} max={100000} value={[2000, 100000]} step={1000} tooltip={tooltip01} ticks={ticks01} changed={priceHandler}/>
                                        </div>

                                        <div className="wrap ml-5 mr-10">
                                            <div className="label">ANO</div>
                                            <SliderComponent id="slider-year" type='Range' min={2010} max={2024} value={[2010, 2024]} step={1} tooltip={tooltip02} ticks={ticks02}  />
                                        </div>
                            </div>
                            <div className='grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 xl:pl-5 xl:pr-55 ml-10 mr-14'>
                                {cars?.map((car, i) =>
                                    <div key={i} className='ml-5' >
                                        <Cards car={car}/>
                                    </div>
                                )}
                            </div>
                        </div>

                    )}
                </div>
            </section>
    )
}
export default HomePage