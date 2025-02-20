import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../pages/Header/Header'
import { Footer } from '../../pages/Footer/Footer'

export const Layout = () => {
  return (
    <>
     <Header /> 
     <div className='content'>
      <Outlet /> 
     </div>
     <Footer />   
    </>
  )
}
