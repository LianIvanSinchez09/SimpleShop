import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../../../Context/ShoppingCartContext';

const MiniCard = (props) => {    
  
  // console.log(props.data.id);
  const shopContext = useContext(ShoppingCartContext)
  const cartItems = shopContext.shopItems 
  

  return (
    <>
      <div className='minicard border'>
          <p>{props.data.title} - $ {props.data.price}</p>
          <div className='delete-button'>
            <button onClick={() => {
              const pos = cartItems.map(e => e.data.id).indexOf(props.data.id);
              // console.log(pos);
              console.log(shopContext.shopItems);
              cartItems.splice(pos, 1)
              console.log(shopContext.shopItems);
              
            }}>Eliminar</button>
          </div>
      </div>
    </>
  )
}

export default MiniCard
