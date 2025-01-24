import React, { createContext, useState } from 'react'

export const CartComponentContext = createContext()

export const CartComponentContextProvider = ({children}) => {
    
    const [cartComponentState, setcartComponentState] = useState([]);


    return(
        <CartComponentContext.Provider value={{cartComponentState, setcartComponentState}}>
            {children}
        </CartComponentContext.Provider>
    )
}