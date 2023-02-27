import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('day');

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'day' ? 'white' : 'black';
        document.body.style.color = theme === 'day' ? 'black' : 'white';
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'day' ? 'night' : 'day');
    };

    const contextValue = {
        theme,
        toggleTheme,
    };

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    );
};

const useTheme = () => {
    const context = useContext(Context);
    const { theme, toggleTheme } = context;
    return { theme, toggleTheme };
};

export { Context, ThemeProvider, useTheme };