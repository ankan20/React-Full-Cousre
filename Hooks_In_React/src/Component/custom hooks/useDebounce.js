import { useEffect, useState } from "react";

export function useDebounce (value,timeout){
    const [debouncedValue,setDebouncedValue] = useState(value);
    useEffect(()=>{
      let val =setInterval(()=>{
        setDebouncedValue(value);
      },timeout)
      return ()=>{
        clearInterval(val);
      }
    },[value])
    return debouncedValue;
  }