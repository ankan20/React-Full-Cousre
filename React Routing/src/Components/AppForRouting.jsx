import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Landing = React.lazy(()=> import('./Components/Landing'))
const  Dashboard =React.lazy(()=> import('./Components/Dashboard'))

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <AppBar/>
      <Routes>
        <Route path="/" element={<Suspense fallback={"loading ..."}> <Landing/> </Suspense>}/>
        <Route path="/dashboard" element={<Suspense fallback={"loading ..."}> <Dashboard/></Suspense>}/>
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
