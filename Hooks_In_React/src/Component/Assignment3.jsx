import React, { useMemo, useState } from 'react'

const Assignment3 = () => {
    const [items,setItems] = useState([
        {name:"chocho",value:200},
        {name:"Chips",value:150},
        {name:"Onion",value:50},
        {name:"Tomato",value:75}
        //Add more items as needed
    ]);
    const [counter,setCounter]= useState(0);
    let totalCost=0;
    
    totalCost = useMemo(()=>{
        items.map((item)=>{
            totalCost+=item.value;
        })       
        return totalCost;
    },[items]);
  return (
    <div>
        <button onClick={function(){setCounter(counter+1)}}>Counter {counter}</button>
      <ul>
        {items.map((item,index)=>(
            <li key={index}>{item.name} - price :{item.value}</li>
        ))}
      </ul>
      <br /><br />
      <p>Total value :{totalCost}</p>
    </div>
  )
}

export default Assignment3
