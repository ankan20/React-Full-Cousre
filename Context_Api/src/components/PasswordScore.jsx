import React, { useContext } from 'react'
import PasswordContext from '../context/PasswordContext'

const PasswordScore = () => {
    const {password} = useContext(PasswordContext)
    if(password.length<8 && password.length !=0){
        return(
            <div>
                <h2>Your Password is : {password}</h2>
                <h3>Your password need to have minimum 8 charecters.</h3>

            </div>
        )
    }
    else if(password.length !=0 && password.length >8){
        return(
            <div>
                <h2>Your Password is : {password}</h2>
                <h2>It is good password containing {password.length} charecters.</h2>
            </div>
        )
    }
  return (
    <div>
      <h2>Please Enter your password to see score.</h2>
      
    </div>
  )
}

export default PasswordScore
