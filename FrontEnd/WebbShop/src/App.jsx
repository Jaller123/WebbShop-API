import { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister'
import Products from './Components/Products'

function App()
 {
 
  return (
       <Routes>
      <Route path="/" element={<LoginRegister />}/>
      <Route path="/products" element={<Products />}></Route>
      {/* <Navbar /> */}
      </Routes>
  
  )
}

export default App
