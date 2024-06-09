import React, { memo, useCallback, useState } from 'react'

const App = () => {
  const [counter,setCounter] = useState(0);
  let a  = useCallback(()=>{
      return 10;
  },[])

  // if we pass function the it checks reference and if we just pass the variable then it does not rerender because it checks only value
  //prevent re render while passing function use useCallback
  return (
    <div>
      <br />
      <br />
      <Demo a={a}/>
      <br />
      <br />
      <button onClick={function(){setCounter(counter+1)}}>Counter {counter}</button>
    </div>
  )
}

const Demo = memo(({a})=>{
  console.log("Re rendered");
  return (
    <div>
      This is demo 
    </div>
  )
})


export default App
