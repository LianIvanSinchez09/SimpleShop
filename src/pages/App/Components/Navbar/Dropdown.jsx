import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../../../Context/ShoppingCartContext'
import MiniCard from './MiniCard'

const Dropdown = () => {
    const userItems = useContext(ShoppingCartContext);
    let itemCount = 0;
  
    return (
      <div className="dropdown">
        <button>Carrito</button>
        <div className="content">
          {userItems.shopItems?.map((item) => {
            itemCount += 1;
            return <MiniCard key={item.data.id} data={item.data} />;
          })}
        </div>
      </div>
    );
  };
  

export default Dropdown
