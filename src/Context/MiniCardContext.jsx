import React, { createContext, useState } from 'react'

export const miniCardContext = createContext([])

export const miniCardProvider = ({children}) => {
    
    const [miniCard, setminiCard] = useState(null) 

    return(
        <miniCardContext.Provider value={{miniCard, setminiCard}}>
            {children}
        </miniCardContext.Provider>
    )
}