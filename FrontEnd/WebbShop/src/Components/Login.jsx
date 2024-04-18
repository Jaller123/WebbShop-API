import React from 'react'
import { useState, useEffect } from 'react';

const Login = () => 
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


  return (
    <div>Login</div>
  )
}

export default Login