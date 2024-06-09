import React, { useState } from 'react'
import { ThemeProvider } from './contexts/Theme'

const App = () => {
  const [themeMode,setThemeMode] = useState("light");
  const darkTheme =()=>{
    setThemeMode("dark");
  }
  const lightTheme = ()=>{
    setThemeMode("light");
  }
  return (
    <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* ThemeBtn */}
                    </div>
                      {/* Card */}
                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>
            </ThemeProvider>
    </>
  )
}

export default App


