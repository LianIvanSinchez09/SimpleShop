import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../../../Context/ShoppingCartContext'
import MiniCard from './MiniCard'

const Dropdown = () => {
    const userItems = useContext(ShoppingCartContext);
    let itemCount = 0;
    let precioTotal = 0;

    return (
      <div className="dropdown">
        <button onClick={()=>{
          let divContent = document.getElementsByClassName('content')[0];
          if(divContent.style.display != 'none'){
            divContent.style.display = 'none'
          }else{
            divContent.style.display = 'block'
          }

        }}>Carrito</button>
        <div className="content">
          {userItems.shopItems?.map((item) => {
            itemCount += 1;
            precioTotal += item.data.price
            console.log(item.data);
            
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
