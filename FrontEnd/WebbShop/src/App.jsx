import { useState } from 'react'
import Navbar from './Components/Navbar'
import LoginRegister from './Components/LoginRegister'
import Products from './Components/Products'

function App()
 {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const handleLogin = () =>
  {
    setIsLoggedIn(true)
  }
  return (
    <>
      <div>
      {!isLoggedIn && <LoginRegister onLogin={handleLogin}/>}
      {isLoggedIn && <Products />}
      {/* <Navbar /> */}
      </div>
    </>
  )
}

export default App
