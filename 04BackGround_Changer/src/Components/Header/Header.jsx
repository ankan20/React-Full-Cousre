import React from 'react'
import {BrowserRouter, Link,NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
      
      {/* <Link to='/home' className='mt-4 ml-11 text-gray-600'> HOME</Link> */}
      <div className='h-20 w-screen bg-slate-800 p-3 flex justify-center items-center'>
      
      <NavLink to='/' className={({isActive})=>
        (`py-2 pr-4 pl-3 ${isActive ? "text-orange-600" :"text-black"}`)
    }>Home</NavLink>
      <NavLink to='/about' className={({isActive})=>
        (`py-2 pr-4 pl-3 ${isActive ? "text-orange-600" :"text-black "}`)
    }>About</NavLink>
      
      
      </div>
    </>
  )
}

export default Header


//6:36 how to route pages
