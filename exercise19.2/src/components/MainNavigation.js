import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/Context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={theme === 'day' ? classes['day-mode'] : classes['header night-mode']}>
            <nav>
                <ul className={theme === 'day' ? classes['listDay'] : classes['listNight']}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <button className={theme === 'day' ? classes['dayBtn'] : classes['nightBtn']} onClick={toggleTheme}>
                            {theme === 'day' ? 'Night' : 'Day'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;