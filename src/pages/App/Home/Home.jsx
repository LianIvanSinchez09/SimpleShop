import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Components/Navbar/Layout'
import Card from '../Components/Navbar/Card'

const Home = () => {

  
  const [items, setItems] = useState(null);

  //useEffect sirve para sincronizar un componente con un sistema externo (por ejemplo esta api)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res => setItems(res))
  }, [])
  
  return (
      <div className="flex justify-center">
          <Layout>
              {items?.map((item) => (
                  <Card key={item.id} data={item}/>
                ))}
          </Layout>
      </div>
);

}

export default Home
