import './App.css'
import Login from './components/Login'
import PasswordChecker from './components/PasswordChecker'
import PasswordScore from './components/PasswordScore'
import Profile from './components/Profile'
import PasswordContextProvider from './context/PasswordContextProvider'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    // <UserContextProvider>
    
    //   <h1>Hello UserContext</h1>
    //   <Login/>
    //   <Profile/>
    // </UserContextProvider>
    <PasswordContextProvider>
      <PasswordChecker/>
      <PasswordScore/>
    </PasswordContextProvider>
  )
}

export default App
