import React from 'react';
import { useTheme } from '../contexts/Context';
import classes from '../App.css';

function HomePage() {
    const { theme } = useTheme();

    return (
        <div className={theme === 'day' ? classes['day-mode'] : classes['night-mode']}>
            <h1>Home Page</h1>
            <p>Home Sweet Home</p>
        </div>
    );
}

export default HomePage;