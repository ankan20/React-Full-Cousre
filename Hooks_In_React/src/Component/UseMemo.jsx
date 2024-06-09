import React, { useEffect, useMemo, useState } from 'react'

const App = () => {
  const [num,setNum] = useState(0);
  const [counter,setCounter] = useState(0);
  
  let sum = useMemo(()=>{
    let insum =0;
    for(let i =0;i<=num;i++){
      insum+=i;
    }
    console.log("run again")
    return insum;
  },[num])


  return (
    <div>
      <br />
      <input type="text" placeholder='enter a number' onChange={function(e){setNum(e.target.value)}}/>
      <br /><br />
      <p>Sum is : {sum}</p>
      <br />
      <button onClick={function (){setCounter(counter+1)}}>Counter {counter}</button>
    </div>
  )
}

export default App
