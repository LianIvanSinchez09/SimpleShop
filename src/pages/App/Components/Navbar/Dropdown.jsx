import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../../../Context/ShoppingCartContext'
import MiniCard from './MiniCard'

const Dropdown = () => {
    const userItems = useContext(ShoppingCartContext);
    let itemCount = 0;
    let precioTotal = 0;
    let cartFlag = false;
    
    return (
      <div className="dropdown">
        <button onClick={()=>{
        let divContent = document.getElementsByClassName('content')[0];
        cartFlag === false ? cartFlag = true : cartFlag = false
        cartFlag ? divContent.style.display = 'block' : divContent.style.display = 'none' 
        }}>Carrito</button>
        <div className="content">
          {userItems.shopItems?.map((item) => {
            itemCount += 1;
            precioTotal += item.data.price            
            return <MiniCard key={itemCount} data={item.data} />;
          })}
          <div className='border-black'>
            <p>Total: $ {Math.floor(precioTotal)} </p>
          </div>
        </div>
      </div>
    );
  };
  

export default Dropdown
