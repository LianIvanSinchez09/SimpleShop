import React, { createContext, useState } from 'react'

export const ThemeContext = createContext('white')

export const ThemeContextProvider = ({children}) => {
    
    const [theme, setTheme] = useState()

    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

