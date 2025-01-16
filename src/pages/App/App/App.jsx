import { createContext, useContext, useState } from 'react'
import Home from '../Home/Home.jsx'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import MyAccount from '../MyAccount/MyAccount.jsx'
import MyOrder from '../MyOrder/MyOrder.jsx'
import MyOrders from '../MyOrders/MyOrders.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import SignIn from '../SignIn/SignIn.jsx'
import Navbar from '../Components/Navbar/Navbar.jsx'
import { ThemeContext ,ThemeContextProvider } from '../../../Context/ThemeContext.jsx'
import { ShoppingCartContext, ShoppingCartProvider } from '../../../Context/ShoppingCartContext.jsx'


const AppRoutes = () => {
  
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sign-in', element: <SignIn/>},
    {path: '/*', element: <NotFound/>}
  ])
  
  return routes
}

const App = () => {
  
  //Contextos

  // color por defecto de la app / color escogido por el usuario
  const currTheme = useContext(ThemeContext)

  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
          <ThemeContextProvider>
              <Navbar color={currTheme}/>
              <Home color={currTheme}/>
          </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App