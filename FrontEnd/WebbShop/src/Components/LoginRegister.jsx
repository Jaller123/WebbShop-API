import React from 'react'
import './Login.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => 
{
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedin, setIsLoggedIn] = useState(false)
  const [createUser, setCreateUser] = useState("")
  const navigate = useNavigate();
 
  

  useEffect(() =>
  {

    fetch('http://localhost:3001/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
    
  }, []);

  const handleLogin = async () =>
   {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ name: username, password: password })
      });

      if (response.ok) 
      {
        const data = await response.json();
        console.log('Login successful:', data);
        setUsername('')
        setPassword('')
        navigate('/Products');
        setIsLoggedIn(true)
      } 
      else 
      {
        console.log('Incorrect username or password');
        setUsername('')
        setPassword('')
      }
    } 
    catch (error)
    {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleRegister = async () => 
  {
    try 
    {
      const response = await fetch('http://localhost:3001/users/create', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ name: username, password: password })
      });

      if (response.ok) 
      {
        const data = await response.json();
        localStorage.setItem("user-info", JSON.stringify(data)); 
        console.log('Registration successful:', data);
      } 
      else 
      {
        const errorData = await response.json();
        alert(errorData.error); 
      }
    } 
    catch (error) 
    {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  
  return (
    <div className="input">
      <input type="text" placeholder="Username" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
      <button onClick = {handleLogin} className='btn'>Login</button>
      <button onClick ={handleRegister} className='btn'>Create User</button>
    </div>
  )
}


export default LoginRegister