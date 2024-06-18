import React, { useEffect, useState } from 'react'
import {useTodos} from './Component/custom hooks/useTodos'
import { useDebounce } from './Component/custom hooks/useDebounce';





const App = () => {
  const [value,setValue] = useState("");
  const newValue = useDebounce(value,500);
 
  return (
    <div>
      debounced value is <b>{newValue}</b> <br />
      <input type="text" onChange={function (e){
        setValue(e.target.value)
      }} />
    </div>
  )
}

export default App
