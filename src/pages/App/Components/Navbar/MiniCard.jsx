import React from 'react'

const MiniCard = (props) => {    

  console.log(props);
  

  return (
    <div className='border'>
      <p>{props.data.title} - $ {props.data.price}</p>
    </div>
  )
}

export default MiniCard
