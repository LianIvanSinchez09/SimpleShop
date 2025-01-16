import React, { useState, useContext } from 'react'
import { ShoppingCartContext } from '../../../../Context/ShoppingCartContext'

const Card = (props) => {    
  

      const context = useContext(ShoppingCartContext)
            
      
      return (
        
        <div style={{
          backgroundColor: 'white'
        }}
        className='border-x-2'>
          <figure className='relative mb-2 h-4/5'>
            {/* <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-0.5'>{props.props.item.category}</span> */}
            {/* <img className='cursor-pointer object-cover w-40 rounded-lg' src={props.props.item.image} alt="headphones" /> */}
            <button onClick={() => {
              context.setCount(context.count + 1)
              console.log(context.count);
              
            }} className='absolute flex top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-xl m-1'>+</button>
            <p className='flex justify-between'>
                {/* <span className='text-sm font-light'>{props.props.item.title}</span>
                <span className='text-lg font-semibold'>${props.props.item.price}</span> */}
            </p>
          </figure>
        </div>
      )
}

export default Card
