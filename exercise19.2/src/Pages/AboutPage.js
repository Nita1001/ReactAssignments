import React from 'react';
import { useTheme } from '../contexts/Context';
import classes from '../App.css';

function AboutPage() {
    const { theme } = useTheme();

    return (
        <div className={theme === 'day' ? classes['day-mode'] : classes['night-mode']}>
            <h1>About Page</h1>
            <p>This is the about page.</p>
        </div>
    );
}

export default AboutPage;