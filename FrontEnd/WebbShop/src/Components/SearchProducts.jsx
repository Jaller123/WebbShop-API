import React, { useState } from 'react'
import { useEffect, useRef } from 'react';

const SearchProducts = ({ setProducts, products, storeProducts }) => 
{
const [searchValue, setSearchValue] = useState('');
const searchProduct = useRef();


const handleSearch = () => 
{
  if (searchValue.trim() === '') 
  {
    setProducts(storeProducts)
  }

  else
  {
    let filteredProducts = storeProducts.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
    setProducts(filteredProducts)
  }

  
}

const inputHandler = () => 
{
  setSearchValue(searchProduct.current.value)
}


  return (
    <div className='Search'>
    <input type="text" className="searchInput" placeholder='Search' 
    onKeyDown={e => {if (e.key === 'Enter')
    {handleSearch()}}}ref={searchProduct}
    onChange={inputHandler}/>
    <button onClick={handleSearch}>Search</button>
    {searchValue.trim() !== 0 && products.length === 0 && (<p>No Products Found</p>)}
   </div>
  )
}

export default SearchProducts