import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchProducts from './SearchProducts';
import Navbar from './Navbar'

const Products = () => {
const [products, setProducts] = useState([])
const [storeProducts, setStoreProducts] = useState([])

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
        setProducts(data)
        setStoreProducts(data)
        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
    
  }, []);

  return (
    <>
     <div>Products
      <SearchProducts setProducts={setProducts} products={products} storeProducts={storeProducts}/>
      <ul>
        {products.map(product => (
          <li key={products.id}>
          <image>{products.image}</image>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          </li>))}
      </ul>
     </div>
    </>
  )
}

export default Products