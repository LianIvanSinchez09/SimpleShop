import React, { useContext } from 'react'
import App from './App/App'
import { ShoppingCartProvider } from '../../Context/ShoppingCartContext'
import { ThemeContext, ThemeContextProvider } from '../../Context/ThemeContext'
import { miniCardProvider } from '../../Context/MiniCardContext'


function Home() {

  const theme = useContext(ThemeContext);

  return (
    <div>
      <ThemeContextProvider>
        <ShoppingCartProvider>
          <miniCardProvider>
            <App theme={theme}/>
          </miniCardProvider>
        </ShoppingCartProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default Home
