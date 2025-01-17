import React, { useContext } from 'react'
import App from './App/App'
import { ShoppingCartContext, ShoppingCartProvider } from '../../Context/ShoppingCartContext'
import { ThemeContext, ThemeContextProvider } from '../../Context/ThemeContext'

function Home() {

  const theme = useContext(ThemeContext);

  return (
    <div>
      <ThemeContextProvider>
        <ShoppingCartProvider>
          <App theme={theme}/>
        </ShoppingCartProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default Home
