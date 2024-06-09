import React, { useEffect, useRef } from 'react'

//focus on clicking on button


const Assignment6 = () => {
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const handleFocus = ()=>{
        inputRef.current.focus();
    }
   
  return (
    <div>
      <input ref={inputRef} type="text " placeholder='enter something' />
      <button onClick={handleFocus}>Focus on</button>
    </div>
  )
}

export default Assignment6
