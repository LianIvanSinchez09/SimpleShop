import React, { useState, useContext } from 'react'
import { ShoppingCartContext } from '../../../../Context/ShoppingCartContext'
import { ThemeContext } from '../../../../Context/ThemeContext'


const Card = (props) => {    
  

      const shopContext = useContext(ShoppingCartContext)
      const contextTheme = useContext(ThemeContext)      

      return (        
        <div className='card'>
          <div className='image-container'>
            <img className='cursor-pointer object-cover rounded-lg' src={props.data.image} alt="headphones" />
          </div>
          <div className='info'>
            <p className='flex justify-between'>
            <span className='text-sm font-light text-center'>{props.data.title}</span>
            <span className='text-lg font-semibold'>${props.data.price}</span>
            </p>
          </div>
          <button
          onClick={() => {
            shopContext.setShopItems((prevItems) => [...prevItems, props]);            
          }}
        
        >
          +
        </button>
        </div>
      )
}

export default Card
