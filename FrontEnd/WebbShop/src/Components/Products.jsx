import React from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'

const Products = () => {

  useEffect(() =>
  {
    {    
      fetch('http://localhost:3001/products')
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
    }
    
  }, []);

  return (
    <>
     <div>Products</div>
    </>
  )
}

export default Products