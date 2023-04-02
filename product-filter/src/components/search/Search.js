import React from 'react'
import "./Search.css"


const Search = ({inputValue,onInputChange}) => {

 


  return (
    <div className='--form-control'>
      <input 
      className='input'
      type="text" 
      placeholder="Search product..." 
       value={inputValue}
        onChange={onInputChange}
       />
    </div>
  )
}

export default Search