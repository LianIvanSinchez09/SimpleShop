import React from 'react'

const MiniCard = (props) => {    

  console.log(props);
  

  return (
        <p>{props.data.title}</p>
  )
}

export default MiniCard
