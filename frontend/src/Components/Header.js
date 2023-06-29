import React, { useEffect, useState } from 'react'
import { MenuIcon, SearchCircleIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import {LogOut} from "../Actions/userActions";

function Header() {


    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const {userInfo} = auth
    const navigate = useNavigate()
    const [dropdown, setDropdown] = useState(false)

    const btnLogOut = () => {
        dispatch(LogOut())
    }

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

    window.addEventListener('scroll', () => {
        if(dropdown){
            setDropdown(!dropdown)
        }

    })

    useEffect(()=>{
    },[dispatch])

    return (
        <header className='sticky top-0 z-50 bg-white '>

            <div className='bg-neutral-50 flex-nowrap space px-4 py-3 shadow-sm border-y '>
                <div className='flex justify-between xl:ml-60 xl:mr-60'>
                    <div>
                        <a href='/'> <img className='relative h-10 w-20 ml-12' src='https://i.ibb.co/2jb1xdD/W.jpg' alt=''/></a>
                    </div>

                    {userInfo ? (
                        <div className="relative inline-block text-left mr-12">
                            <div>
                                <button onClick={handleDropdown} type="button" className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  " id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <MenuIcon className='h-6' />
                                    <UserCircleIcon className='h-6'/>
                                </button>
                            </div>
                            {dropdown ? (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-49" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">
                                        <Link to={`/user/${userInfo.userId}`} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Cuenta</Link>
                                        <Link to='/list-car' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Alquila tu vehiculo</Link>

                                            <a href='/' onClick={btnLogOut}
                                                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                                                    >Cerrar Sesion
                                            </a>

                                    </div>
                                </div>
                            ) : ( <div></div> )}
                        </div>
                    ) : (
                        <div className='flex items-center mr-12'>
                            <Link to='/login'><button className='rounded-full py-2 px-3 text-xs uppercase font-bold tracking-wider border-gray-300 border-2'>Iniciar Sesion</button></Link>
                        </div>
                    )

                    }
                </div>
            </div>

        </header>

    )
}

export default Header