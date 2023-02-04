import React from 'react'
import Medicine from './Medicine/Medicine'
import News from './News/News'
import './favourite.css' 
import Header from '../Header/Header'
import Homec from '../HomeC/Homec' 

export default function Favourite() {
  return (
    <>
    <div className='Header'>
     <Header/>
    </div>
    <div className='Favourite'>
      <Medicine/>
      <News/>
    </div>
    <div className='HomeC'>
      <Homec/>
    </div>
    </>
  )
}
