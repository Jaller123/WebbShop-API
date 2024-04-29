import React, { useState } from 'react'
import { useEffect, useRef } from 'react';

const SearchProducts = () => 
{
const [searchValue, setSearchValue] = useState();
const searchProduct = useRef();


  return (
    <div className='Search'>
    <input type="text" className="searchInput" placeholder='Search' ref={searchProduct} ></input>
   </div>
  )
}

export default SearchProducts