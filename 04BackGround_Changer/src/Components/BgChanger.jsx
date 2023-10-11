import React, { useState } from 'react'

function BgChanger() {
    const [color,setColor] =useState('red');
  return (
    <>
        <div className='h-screen w-screen  flex justify-center' style={{backgroundColor:color}}>
            <div className='h-30 w-[80%] bg-white flex items-center justify-evenly gap-2 text-white rounded-xl absolute bottom-6 '>
                <button className='h-10 w-14 bg-red-700 rounded-lg' onClick={()=>setColor('red')}>Red</button>
                <button className='h-10 w-14 bg-green-700 rounded-lg' onClick={()=>setColor('green')}>Green</button>
                <button className='h-10 w-14 bg-blue-700 rounded-lg' onClick={()=>setColor('blue')}>Blue</button>
                <button className='h-10 w-14 bg-yellow-300 rounded-lg text-black' onClick={()=>setColor('yellow')}>Yellow</button>
                <button className='h-10 w-14 bg-black rounded-lg ' onClick={()=>setColor('black')}>Black</button>
                <button className='h-10 w-14 bg-purple-700 rounded-lg' onClick={()=>setColor('purple')}>Purpale</button>
            </div>

        </div>
    
    </>
  )
}

export default BgChanger


//4:11