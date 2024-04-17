import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to="/">Home</Link>
        <Link to="/login">Login/Register</Link>
        <Link to="/search">Search</Link>
        <Link to="orders">Cart</Link>
        <Link to="/logout">Logout</Link>
    </div>
  )
}

export default Navbar