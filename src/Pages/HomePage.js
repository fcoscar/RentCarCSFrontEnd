import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAll} from '../Actions/carActions'
import Cards from "../Components/Cards";
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
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
    let tooltip01 = { isVisible: true, format: "#,### DOP" };
    let ticks02 = {
        placement: "After",
        largeStep: 4,
        smallStep: 1,
        showSmallTicks: true
    };
    let tooltip02 = { isVisible: true};

    useEffect(() => {
        dispatch(getAll());
    },[dispatch])

    return (
        <>
        <section className='section'>
        {loading ? (
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 ml-10 mr-14 xl:pl-72 xl:pr-72 '>
                   <h1>loading</h1>
                </div>
            ) : (
                <div>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 xl:pl-5 xl:pr-55 ml-10 mr-14'>
                        {cars?.map((car, i) =>
                            <div key={i} className='ml-5' >
                                <Cards car={car}/>
                            </div>
                        )}
                    </div>
                </div>

            )}
</section>
    <SidebarComponent target='.section' width="320px"
                      id="default-sidebar" ref={Sidebar => sidebarObj = Sidebar} created={onCreate} style={{ visibility: "hidden" }}>
        <div>
            <div className="title"> Filtros</div>
            <div>
                Tipo de Vehiculo
                <ChipListComponent selection='Multiple'>
                    <ChipsDirective>
                        {cats.map((cat, id) =>
                            <ChipDirective text={cat}></ChipDirective>
                        )}
                    </ChipsDirective>
                </ChipListComponent>
            </div>
            Rango de Precio
            <div className='ml-5 mr-10'>
                <SliderComponent id="slider" type='Range' min={0} max={100000} value={[2000, 10000]} step={1000} tooltip={tooltip01} ticks={ticks01}/>
            </div>
            Ano
            <div className='ml-5 mr-10'>
                <SliderComponent id="slider" type='Range' min={2010} max={2024} value={[2010, 2023]} step={1} tooltip={tooltip02} ticks={ticks02}/>
            </div>
            {/*<div>*/}
            {/*    Rango De Precio*/}
            {/*    <div className="wrap">*/}
            {/*        <div className="label">Rango De Precio</div>*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    </SidebarComponent>
    </>
    )
}
export default HomePage