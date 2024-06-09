import React, { useRef, useState } from 'react'

//useRef can be use as global variable 
const Assignment7 = () => {
    let totalRerender = useRef(0);
    const [counter,setCounter] = useState(0);
    totalRerender.current= totalRerender.current+1;
  return (
    <div>
      <p>Total number of re render the whole component {totalRerender.current}</p>
      <button onClick={function(){setCounter(counter+1)}}>Re-render</button>
    </div>
  )
}

export default Assignment7
