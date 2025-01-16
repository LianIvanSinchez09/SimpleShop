import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Components/Navbar/Layout'
import Card from '../Components/Navbar/Card'
import { ShoppingCartContext, ShoppingCartProvider } from '../../../Context/ShoppingCartContext';

const Home = (props) => {

  
  const [items, setItems] = useState(null);

  //useEffect sirve para sincronizar un componente con un sistema externo (por ejemplo esta api)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res => setItems(res))
  }, [])
  
  return (
    <ShoppingCartProvider>
      <div className="flex justify-center">
          <Layout>
              {items?.map((item) => (
                  <Card key={item.id}/>
                ))}
          </Layout>
      </div>
    </ShoppingCartProvider>
);

}

export default Home
