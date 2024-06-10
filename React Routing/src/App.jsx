import React, { memo, useContext } from 'react'
import { useState } from 'react'
import { CountContext } from './Components/Context';

const App = () => {
  const [count , setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={count} >
          <Count setCount = {setCount}/>
      </CountContext.Provider>
    </div>
  )
}
function Count ({setCount}){
  return (
    <>
    
      <CountRender />
      <Button setCount={setCount}/>
    
    </>
  )
}

function CountRender (){
  console.log("Render count")
  const count = useContext(CountContext);
  return (
    <>
      <h3>value of count {count}</h3>
      
    </>
  )
}

const Button = memo( ({setCount})=>{
  console.log("Render button")
  const count = useContext(CountContext);
  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </>
  )
})

export default App
