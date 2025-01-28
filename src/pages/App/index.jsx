import React, { useContext } from 'react'
import App from './App/App'
import { ShoppingCartProvider } from '../../Context/ShoppingCartContext'
import { ThemeContext, ThemeContextProvider } from '../../Context/ThemeContext'
import { MiniCardProvider } from '../../Context/MiniCardContext'


function Home() {

  const theme = useContext(ThemeContext);

  return (
    <div>
      <ThemeContextProvider>
        <ShoppingCartProvider>
          <MiniCardProvider>
            <App theme={theme}/>
          </MiniCardProvider>
        </ShoppingCartProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default Home
