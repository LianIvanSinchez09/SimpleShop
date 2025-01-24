import React, { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    
    const [shopItems, setShopItems] = useState([]) 

    return(
        <ShoppingCartContext.Provider value={{shopItems, setShopItems}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}