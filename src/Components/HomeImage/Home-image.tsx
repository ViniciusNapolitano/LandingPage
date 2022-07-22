import React from 'react'

import img from '../../Assets/Images/home-image.png'

import './style.sass'

export default function HomeImage() {
  return (
    <div className='wrap-home-image'>
      <img src={img} alt="Home-Image" />
    </div>
  )
}
