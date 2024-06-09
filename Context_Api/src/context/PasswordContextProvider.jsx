import React, { useState } from 'react'
import PasswordContext from './PasswordContext'
const PasswordContextProvider = ({children}) => {
    const [password,setPassword] = useState("")
  return (
    <PasswordContext.Provider value={{password,setPassword}}>
      {children}
    </PasswordContext.Provider>
  )
}

export default PasswordContextProvider
