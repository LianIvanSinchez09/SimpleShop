import React from 'react'

const Layout= ( {children} ) => {
  return (
    <div className='mt-20 gap-10 grid grid-cols-3'>
      {children}
    </div>
  )
}

export default Layout
