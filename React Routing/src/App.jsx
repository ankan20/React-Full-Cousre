import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './Components/Landing'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <AppBar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

function AppBar (){
  const navigate = useNavigate(); //use in BrowserRouter

  return (
    <>
    
    <div >
      <button onClick={()=>{
        navigate("/")
      }}>Landing Page</button>
      <button onClick={()=>{
        navigate("/dashboard")
      }}>Dashboard</button>
    </div>
    
    </>
  )
}

export default App
