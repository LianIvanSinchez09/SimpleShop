import React from 'react'

const Layout= ( {children} ) => {
  return (
    <div className='mt-20 grid grid-cols-3 grid-rows-1 gap-10'>
      {children}
    </div>
  )
}

export default Layout
