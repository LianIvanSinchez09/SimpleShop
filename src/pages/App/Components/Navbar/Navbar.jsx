import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleButton from './ToggleButton';
import { ThemeContext } from '../../../../Context/ThemeContext';

const Navbar = (props) => {

    const activeStyle = 'underline';
    const [theme, setTheme] = useState(props.color);

    return (
        <nav
            style={{ backgroundColor: theme }}
            className="top-0 flex justify-between items-center fixed gap-10 z-10 py-5 px-8 w-full text-sm font-light"
        >
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/all"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/other"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Other
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <ToggleButton
                    func={() => {
                        // Cambia el estado del tema entre 'light' y 'gray'
                        setTheme(theme === 'white' ? 'gray' : 'white');
                    }}
                />
                <li>
                    <NavLink
                        to="/my-account"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        My orders
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
