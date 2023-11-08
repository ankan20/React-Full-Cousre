import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Header/>
      {/* This Outlet use for dynamically change the content  */}
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout
