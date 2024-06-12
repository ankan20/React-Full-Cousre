import React, { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, eveneSelector } from './store/atom/count';

const App = () => {
  const [count , setCount] = useState(0);
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count (){
  console.log("Re render Count")
 
  return (
    <>
      <CountRender />
      <Button />  
      
    </>
  )
}

function CountRender (){
  const count = useRecoilValue(countAtom);
  return (

    <>
      <h3>Count : {count}</h3>
      <EvenCountRender />
     
    </>
  )
}

function EvenCountRender (){
  const isEven = useRecoilValue(eveneSelector);
  return (
    <>
        {
          isEven  ? <p>It is even</p> : ""
        }
    </>
  )
}

function Button (){
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={()=>{setCount(prev => prev+1)}}>Increase</button>
      <button onClick={()=>{setCount(prev=>prev-1)}}>Decrease</button>
    </>
  )
}


export default App
