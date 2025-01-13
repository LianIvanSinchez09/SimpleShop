import { createContext, useState } from 'react'
import Home from '../Home/Home.jsx'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import MyAccount from '../MyAccount/MyAccount.jsx'
import MyOrder from '../MyOrder/MyOrder.jsx'
import MyOrders from '../MyOrders/MyOrders.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import SignIn from '../SignIn/SignIn.jsx'
import Navbar from '../Components/Navbar/Navbar.jsx'
import { ThemeContext } from '../../../Context/ThemeContext.jsx'

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
  
const [theme, setTheme] = useState('light');

  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <Navbar color={theme}/>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App