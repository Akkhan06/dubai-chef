import React from 'react'
import spe from '/Dual Ball-1s-200px.gif'

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
        <img src={spe} alt="" />
    </div>
  )
}

export default LoadingSpinner