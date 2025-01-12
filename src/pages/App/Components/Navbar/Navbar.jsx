import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../App/App';

const Navbar = (props) => {

    const activeStyle = 'underline';
    const [theme, setTheme] = useContext(ThemeContext);


    return (
            <nav 
            style={{backgroundColor: props.color}}
            className= 'top-0 flex justify-between items-center fixed gap-10 z-10 py-5 px-8 w-full text-sm font-light'>
                <ul className='flex items-center gap-3'>
                    <li className='font-semibold text-lg'>
                        <NavLink
                        to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/all' className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/clothes' className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/electronics' className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/furnitures' className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                            Furnitures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/toys' className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                            Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/other' className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                            Other
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex items-center gap-3'>
                    <label className="inline-flex items-center cursor-pointer">
                        <input onClick={() => {theme === 'gray' ? setTheme('yellow') : setTheme('gray')}} type="checkbox" value="" className="sr-only peer"/>
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{theme === 'yellow' ? 'Toggle Dark Mode' : 'Dark Mode enabled'}</span>
                    </label>
                    <li>
                        <NavLink
                        to='/my-account' className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                        >
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/my-orders' className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                        >
                            My orders
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar
