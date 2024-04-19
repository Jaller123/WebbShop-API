import React from 'react'
import './Login.css'
import { useState, useEffect } from 'react';

const Login = () => 
{
  const [createUser, setCreateUser] = useState("")
  const [loginUser, setLoginUser] = useState("")
  

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
    
    const createUser = async () => {
      try 
      {
        let response = await fetch('http://localhost:3001/users', 
        {
          method: 'POST',
          headers: 
          { "Content-type": "application/json"},
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
       
      } 
      
      catch (error) 
      {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    
    
    
  }, []);

  
  return (
    <div className="input">
      <input type="text" />
      <input type="text" />
      <button className='btn'>Login</button>
      <button onClick ={createUser} className='btn'>Create User</button>
    </div>
  )
}


export default Login