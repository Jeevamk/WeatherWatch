import React from 'react'
// import weather from '../assets/weather.webp'
import weather from '../assets/weather.jpeg'

const Background = () => {
  return (
    <>
    <img src={weather} alt="background_img" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
    </>
  )
}

export default Background