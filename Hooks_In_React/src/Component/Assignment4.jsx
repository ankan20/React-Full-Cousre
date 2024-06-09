import React, { memo, useCallback, useState } from 'react'

const Assignment4 = () => {
    const [counter,setCounter] = useState(0);

    
        const handleIncrement=useCallback(()=>{
            setCounter(counter=>counter+1);
            
        },[])
    
        const handleDecrement=useCallback(()=>{
            setCounter(counter=>counter-1);
            
        },[])
       
 

    

  return (
    <div>
        <h3>Counter value : {counter}</h3>
      <ButtonComponent increment={handleIncrement} decrement = {handleDecrement}/>
    </div>
  )
}

const  ButtonComponent= memo(({increment,decrement})=>{
    console.log("component re render")
    return (
        <>
        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>
        
        </>
        
    )
})

export default Assignment4
