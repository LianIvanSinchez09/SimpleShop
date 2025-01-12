import React from 'react'



const Card = (data) => {    
  return (
    <div className='border-x-2 bg-white w-56 h-60'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-0.5'>{data.data.category}</span>
        <img className='cursor-pointer object-cover w-full h-full rounded-lg' src={data.data.image} alt="headphones" />
        <div className='absolute flex top-0 right-0 justify-center items-center bg-white w-6 h-6 border- rounded-xl m-1'>+</div>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.data.title}</span>
            <span className='text-lg font-semibold'>${data.data.price}</span>
        </p>
      </figure>
    </div>
  )
}

export default Card
