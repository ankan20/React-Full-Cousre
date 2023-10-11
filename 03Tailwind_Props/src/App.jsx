import Card from './Components/Card'
import './App.css'
import { useState } from 'react'

function App() {
  const [num,setNum] = useState(0);
  const add = ()=>{
    if(num<20){
      setNum(num+1);
    }
    
  }
  const sub = ()=>{
    if(num> 0){
      setNum(num-1);
    }
  }

  return (
    <>
       
      {num==5 ? <h1>Your Number is now {num}</h1>:<h1>Current Number is {num}</h1>}
      <Card name="Ankan" btntext="new button text"/>
      <button className='mt-4' onClick={add}>Add</button>
      <button className='mt-4 ml-4' onClick={sub}>Subtrac</button>
    </>
  )
}

export default App
