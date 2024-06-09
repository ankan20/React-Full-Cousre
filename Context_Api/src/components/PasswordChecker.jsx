import React, { useContext, useState } from 'react'
import PasswordContext from '../context/PasswordContext'

const PasswordChecker = () => {
    const [pass,setPass] = useState('');
    const {setPassword} =useContext(PasswordContext);
    const handlesubmit = (e)=>{
        e.preventDefault();
        setPassword(pass);
    }
  return (
    <div>
      <h3>Please fill the input box with your password.And AI will tell you how good your password is !</h3>
      <label htmlFor="password">Password : </label>
      <input type="password" className='inpt_box' id='password' onChange={(e)=>setPass(e.target.value)}/>
      <button type='submit' className='btn_sb' onClick={handlesubmit}>Check</button>
    </div>
  )
}

export default PasswordChecker
