import React, { useCallback, useEffect, useRef, useState } from 'react'

const PassWord = () => {
    //variables that need for this project , understand the project and how to atack this kind of project,create variables at first that requared
    const [length,setLength] =useState(8);
    const [numberAllowed,setNumberAllowed] =useState(false);
    const [charAllowed,setCharAllowed] =useState(false);
    const [password,setPassword] =useState("");
    //ref hook for taking refarence of something
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(()=>{
        let pass="";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed){
            str +="0123456789";
        }
        if(charAllowed){
            str +="!~@#$%^&*(){}[]+_-=";
        }
        for(let i =1;i<=length;i++){
            let char = Math.floor(Math.random() * str.length +1);
            pass += str.charAt(char)
        }
        setPassword(pass);
    },[length,numberAllowed,charAllowed,setPassword]);

    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();  //opsotional select by using ? this ,confirm that it is not null ,if any value is available than only use
        passwordRef.current?.setSelectionRange(0,100); //for select a portion of the value
         window.navigator.clipboard.writeText(password);
    },[password])

    //useEffect hooks also need a callback function and a dependency array
    useEffect(()=>{
        passwordGenerator();
    },[length,numberAllowed,charAllowed,passwordGenerator]);

  return (
    <>

        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 min-h-[150px] my-8 text-orange-500 bg-gray-800'>
            <h1 className='text-white text-center my-3'>Password generator</h1>
            <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
                <input type="text" 
                value={password}
                className='outline-none w-full py-1 px-3 '
                placeholder='password'
                readOnly
                ref={passwordRef}  //for taking reference
                />
                <button className='bg-slate-500 w-20'
                onClick={copyPasswordToClipboard}
                >Copy</button>
            </div>  
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="range" 
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=>{
                        setLength(e.target.value)
                    }}
                    />
                    <label >Lenght : {length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type="checkbox"
                    defaultChecked={numberAllowed}
                    id='numberInput'
                    onChange={()=>{
                        setNumberAllowed((prev)=>!prev)
                    }} />
                    <label htmlFor='numberInput'>Numbers</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input type="checkbox"
                    defaultChecked={charAllowed}
                    id='charInput'
                    onChange={()=>{
                        setCharAllowed((prev)=>!prev)
                    }} />
                    <label htmlFor='charInput'>Character</label>
                </div>

            </div>
        </div>
    </>
  )
}

export default PassWord
