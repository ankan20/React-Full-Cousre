import React, { useEffect,useState } from 'react'

const UseEffetTs = () => {
    const [count,setCount] =useState(0)
    useEffect(()=>{
        document.title=`React (${count})`
    });
    const click = ()=>{
        setCount(count+1);
    }
  return (
    <div id='cl-1'>
      <h1>{count}</h1>
      <button onClick={click}>Click me</button>
    </div>
  )
}

export default UseEffetTs
