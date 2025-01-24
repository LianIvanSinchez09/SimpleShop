import React, { useState, useContext } from 'react'
import { ShoppingCartContext } from '../../../../Context/ShoppingCartContext'
import { ThemeContext } from '../../../../Context/ThemeContext'
import { CartComponentContext } from '../../../../Context/CartComponentContext'


const Card = (props) => {    
  

      const shopContext = useContext(ShoppingCartContext)
      const contextTheme = useContext(ThemeContext)      

      return (
        
        <div style={{
          backgroundColor: contextTheme.theme
        }}
        className='border-x-2'>
          <figure className='relative mb-2 h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-0.5'>{props.data.category}</span>
            <img className='cursor-pointer object-cover w-40 rounded-lg' src={props.data.image} alt="headphones" />
            <button
            onClick={() => {
              // copia del arreglo y añade el nuevo producto
              shopContext.setShopItems((prevItems) => [...prevItems, props]);
              console.log(shopContext);
            }}
            className="absolute flex top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-xl m-1"
          >
            +
          </button>

            <p className='flex justify-between'>
            <span className='text-sm font-light'>{props.data.title}</span>
                <span className='text-lg font-semibold'>${props.data.price}</span>
            </p>
          </figure>
        </div>
      )
}

export default Card
