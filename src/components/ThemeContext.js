import React, { useState, createContext } from 'react'

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => null,
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider >
    )
}

export { ThemeContext, ThemeProvider }