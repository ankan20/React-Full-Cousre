import React, { useEffect, useMemo, useState } from 'react'

const Assignment1 = () => {
    const [input,setInput] = useState(0);
    
    let calculatedValue= useMemo(()=>{
        let value=1;
        for(let i =input;i>0;i--){
            value*=i;
            console.log(value);
        }
        return value;
    },[input])


    
  return (
    <div>
      <input type="text" placeholder='eenter a number' onChange={function(e){setInput(e.target.value)}} value={input}/>
      <h2>Factorial</h2>
      <h3>Calculated value : {calculatedValue}</h3>
    </div>
  )
}

export default Assignment1
