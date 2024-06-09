import React, { memo, useCallback, useState } from 'react'

const Assignment5 = () => {
    const [input,setInput] = useState("");
    const [counter,setCounter] = useState(0);
    const handleAlert = useCallback(()=>{
        alert(input);
    },[input])
  return (
    <div>
      <input type="text" placeholder='please enter something' onChange={function (e){setInput(e.target.value)}}/>
      <ShowAlert handleAlert = {handleAlert}/>
      <button onClick={function (){setCounter(counter+1)}}>counter {counter}</button>
    </div>
  )
}

const ShowAlert = memo(({handleAlert})=>{
  console.log("re rebder")
  return (
    <>
      <button onClick={handleAlert}>Click to alert</button>
    </>
  )
})

export default Assignment5
